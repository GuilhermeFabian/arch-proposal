import type { ReactElement } from "react";
import { ChatsControllerProvider } from "./providers/ChatsControllerProvider";
import { Chat } from "./components/Chat";

export function Chats(): ReactElement {
  return (
    <ChatsControllerProvider>
      <Chat />
    </ChatsControllerProvider>
  );
}
