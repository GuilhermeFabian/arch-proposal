import type { PropsWithChildren, ReactElement } from "react";
import "./Layout.scss";

export function Layout({ children, leftSide, rightSide }: LayoutProps) {
  return (
    <div className="layout">
      <div className="layout__sider">{leftSide}</div>
      <div className="layout__content">{children}</div>
      <div className="layout__sider">{rightSide}</div>
    </div>
  );
}

type LayoutProps = PropsWithChildren & {
  leftSide: ReactElement;
  rightSide: ReactElement;
};
