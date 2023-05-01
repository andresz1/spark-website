import { cn } from "@/utils/cn";
import { HTMLProps } from "react";

export type SideNavSeparatorProps = HTMLProps<HTMLParagraphElement>;

export const SideNavSeparator = ({
  className,
  ...others
}: SideNavSeparatorProps) => {
  return (
    <p
      className={cn(className, "p-md text-body-1 text-primary font-semi-bold")}
      {...others}
    />
  );
};
