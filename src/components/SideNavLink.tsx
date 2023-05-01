import { cn } from "@/utils/cn";
import { useRouter } from "next/router";
import { HTMLProps } from "react";

export type SideNavLinkProps = HTMLProps<HTMLAnchorElement>;

export const SideNavLink = ({
  className,
  href,
  ...others
}: SideNavLinkProps) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <a
      className={cn(
        className,
        "block text-body-1 p-md rounded-sm hover:bg-primary/dim-5",
        { ["text-primary font-semi-bold bg-primary/dim-5"]: isActive }
      )}
      href={href}
      {...others}
    />
  );
};
