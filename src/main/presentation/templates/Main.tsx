import type { ReactElement } from "react";
import { Layout } from "@/ds/ui/structural/Layout/Layout";
import { Users } from "@/features/users/presentation";
import { Chats } from "@/features/chats/presentation";
import { ChatsController } from "@/features/chats/controllers/ChatsController";

export function Main(): ReactElement {
  const chatsController = new ChatsController();

  return (
    <Layout rightSide={<Users onClickUser={chatsController.openChat} />}>
      <Chats controller={chatsController} />
    </Layout>
  );
}
