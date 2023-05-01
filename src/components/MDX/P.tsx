import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

export type PProps = HTMLAttributes<HTMLParagraphElement>;

export const P = ({ className, ...others }: PProps) => {
  return <p className={cn(className, "text-body-1 my-md")} {...others} />;
};
