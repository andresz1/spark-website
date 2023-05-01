import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

export type SideNavProps = HTMLAttributes<HTMLElement>;

export const SideNav = ({ className, ...others }: SideNavProps) => {
  return (
    <nav
      className={cn(
        className,
        "sticky top-[64px] w-sz-256 min-w-sz-256 h-full overflow-auto"
      )}
      {...others}
    />
  );
};
