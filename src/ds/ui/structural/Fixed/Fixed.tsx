import type { ReactNode } from "react";

export function Fixed({
  children,
  top,
  bottom,
  left,
  right,
  width,
  height,
  className,
}: FixedProps) {
  return (
    <div
      className={className}
      style={{
        top,
        bottom,
        left,
        right,
        width: `${width}px`,
        height: `${height}px`,
        position: "fixed",
      }}
    >
      {children}
    </div>
  );
}

export type FixedProps = {
  children?: ReactNode;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  width?: number;
  height?: number;
  className?: string;
};
