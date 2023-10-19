import type { ReactElement } from "react";
import { ChatsControllerProvider } from "./providers/ChatsControllerProvider";
import { ChatRoot } from "./components/ChatRoot";
import type { ChatsController } from "../controllers/ChatsController";

export function Chats({ controller }: Props): ReactElement {
  return (
    <ChatsControllerProvider controller={controller}>
      <ChatRoot />
    </ChatsControllerProvider>
  );
}

type Props = {
  controller?: ChatsController;
};
