import { Card } from "@/ds/ui/structural/Card";

export function ChatRoot() {
  return <Card title={<ChatTitle />}>Content</Card>;
}

function ChatTitle() {
  return <p>Username</p>;
}
