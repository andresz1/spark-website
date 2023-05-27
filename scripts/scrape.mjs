#!/usr/bin/env node

import { Document } from "langchain/document";
import { OpenAIEmbeddings } from "langchain/embeddings";
import { SupabaseVectorStore } from "langchain/vectorstores";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import { allDocs } from "../.contentlayer/generated/index.mjs";

dotenv.config();

function embedDocuments(client, docs, embeddings) {
  return SupabaseVectorStore.fromDocuments(docs, embeddings, {
    client,
    tableName: "documents",
    queryName: "match_documents",
  });
}

async function extractDataFromDocs(documents) {
  return documents.map(
    (doc) =>
      new Document({ pageContent: doc.body.raw, metadata: { slug: doc.slug } })
  );
}

async function splitDocsIntoChunks(docs) {
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 2000,
    chunkOverlap: 200,
  });
  return await textSplitter.splitDocuments(docs);
}

(async function run() {
  try {
    const supabaseClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );
    const rawDocs = await extractDataFromDocs(allDocs);
    const docs = await splitDocsIntoChunks(rawDocs);

    //embed docs into supabase
    await embedDocuments(supabaseClient, docs, new OpenAIEmbeddings());
  } catch (error) {
    console.error(error);
  }
})();
