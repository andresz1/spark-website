import { cn } from "@/utils/cn";
import { Heading, HeadingProps } from "./Heading";

export interface H2Props extends HeadingProps {
  anchor: string;
}

export const H2 = ({ className, ...others }: H2Props) => {
  return (
    <Heading
      as="h2"
      className={cn(className, "text-display-3 my-lg")}
      {...others}
    />
  );
};
