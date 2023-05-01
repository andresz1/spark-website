import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

export interface H1Props extends HTMLAttributes<HTMLHeadingElement> {}

export const H1 = ({ className, ...others }: H1Props) => {
  return <h1 className={cn(className, "text-display-2 my-lg")} {...others} />;
};
