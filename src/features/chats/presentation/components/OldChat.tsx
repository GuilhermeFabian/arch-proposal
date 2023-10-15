import type { ReactElement } from "react";
import { useChatsController } from "../../controllers/ChatsController";
import type { Chat } from "../../domain/Chat";

export function ChatContainer(): ReactElement {
  return <div></div>;
}

export function ChatList() {
  const { chats } = useChatsController();

  return (
    <>
      {chats.map((chat) => {
        return <ChatWindow chat={chat} key={chat.id} />;
      })}
    </>
  );
}

function ChatWindow({ chat }: ChatWindowProps) {
  return (
    <div>
      <div>{chat.user.name}</div>
    </div>
  );
}

type ChatWindowProps = {
  chat: Chat;
};
