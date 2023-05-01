import { cn } from "@/utils/cn";
import { ComponentProps } from "react";
import { LivePreview as LivePreviewPrimitive } from "react-live";

export interface LivePreviewProps
  extends ComponentProps<typeof LivePreviewPrimitive> {
  className?: string;
}

export const LivePreview = ({ className, ...others }: LivePreviewProps) => {
  return (
    <div className={cn(className, "p-lg overflow-auto")}>
      <LivePreviewPrimitive {...others} />
    </div>
  );
};
