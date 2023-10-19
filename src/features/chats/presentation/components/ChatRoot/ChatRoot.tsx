import "./ChatRoot.scss";
import { useChatsController } from "@/features/chats/controllers/ChatsController";
import { Card } from "antd";
import { observer } from "mobx-react-lite";
import { Conversation } from "../Conversation";
import { ChatsList } from "../ChatsList";

export const ChatRoot = observer(function ChatRoot() {
  const chatsController = useChatsController();
  const { activeChatsTabs, activeChatUser, onSwitchChat } = chatsController;

  chatsController.loadChats();
  return (
    <Card
      title="Conversas"
      className="chat-container"
      bodyStyle={{ height: "90%", overflowY: "auto" }}
      tabList={activeChatsTabs}
      activeTabKey={activeChatUser}
      onTabChange={onSwitchChat}
    >
      {activeChatUser === "todas" ? <ChatsList /> : <Conversation />}
    </Card>
  );
});
