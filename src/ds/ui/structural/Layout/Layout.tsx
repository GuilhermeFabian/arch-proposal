import type { PropsWithChildren, ReactNode } from "react";
import "./Layout.scss";

export function Layout({ children, leftSide, rightSide }: LayoutProps) {
  return (
    <div className="layout">
      <div className="layout__sider-left">{leftSide}</div>
      <div className="layout__content">{children}</div>
      <div className="layout__sider-right">{rightSide}</div>
    </div>
  );
}

type LayoutProps = PropsWithChildren & {
  leftSide?: ReactNode;
  rightSide?: ReactNode;
};
