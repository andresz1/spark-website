import { ComponentProps } from "react";
import { LiveProvider } from "react-live";
import { IconButton } from "@spark-ui/icon-button";
import { Icon } from "@spark-ui/icon";
import { FiCopy } from "react-icons/fi";
import theme from "prism-react-renderer/themes/vsDark";

import { LivePreview } from "./LivePreview";
import { LiveEditor, LiveEditorProps } from "./LiveEditor";
import { CodeCopyButton } from "./CodeCopyButton";

export interface CodeEditorProps
  extends ComponentProps<typeof LiveProvider>,
    Pick<LiveEditorProps, "size"> {}

export const CodeEditor = ({
  code: codeProp,
  size,
  ...others
}: CodeEditorProps) => {
  const code = codeProp.trim();

  return (
    <LiveProvider theme={theme} code={code} {...others}>
      <div className="grid grid-cols-1 md:grid-cols-2 my-xl shadow-xl text-body-2 rounded-md overflow-hidden">
        <div className="relative">
          <LiveEditor size={size} />

          <CodeCopyButton
            className="absolute right-md top-md shadow-md"
            code={code}
          />
        </div>

        <LivePreview />
      </div>
    </LiveProvider>
  );
};
