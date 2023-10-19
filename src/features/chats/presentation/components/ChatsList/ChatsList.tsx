import { useChatsController } from "@/features/chats/controllers/ChatsController";
import { Avatar, Card } from "antd";
import { observer } from "mobx-react-lite";

export const ChatsList = observer(function ChatsList() {
  const { chats, openChat } = useChatsController();

  return (
    <>
      {Object.values(chats).map((chat) => (
        <Card
          key={chat.id}
          onClick={() => openChat(chat.user)}
          hoverable
          size="small"
          style={{ marginBottom: "8px" }}
        >
          <Card.Meta
            avatar={
              <Avatar src="https://pa1.aminoapps.com/6172/caacb747a9fbea40461055450823c1b13a5b208c_128.gif" />
            }
            title={chat.user.name}
            description={
              <>
                <strong>
                  {chat.messages.at(-1)?.authored ? "Você" : chat.user.name}
                  :&nbsp;
                </strong>
                <span>{chat.messages.at(-1)?.content}</span>
              </>
            }
          />
        </Card>
      ))}
    </>
  );
});
