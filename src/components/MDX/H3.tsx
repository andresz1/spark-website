import { cn } from "@/utils/cn";
import { Heading, HeadingProps } from "./Heading";

export type H3Props = HeadingProps;

export const H3 = ({ className, ...others }: H3Props) => {
  return (
    <Heading
      as="h3"
      className={cn(className, "text-subhead my-md")}
      {...others}
    />
  );
};
