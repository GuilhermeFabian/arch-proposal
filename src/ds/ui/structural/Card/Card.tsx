import type { CardProps } from "antd";
import { Card as AntdCard } from "antd";

export function Card(props: CardProps) {
  return <AntdCard {...props} />;
}
