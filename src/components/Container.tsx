import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export const Container = ({ className, ...others }: ContainerProps) => {
  return (
    <div className={cn(className, "max-w-[1280px] m-auto px-lg")} {...others} />
  );
};
