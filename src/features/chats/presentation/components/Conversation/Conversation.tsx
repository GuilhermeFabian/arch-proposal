import { useChatsController } from "@/features/chats/controllers/ChatsController";
import { observer } from "mobx-react-lite";
import { Message } from "../Message";
import "./Conversation.scss";

export const Conversation = observer(function Conversation({
  dataTestId,
}: ConservsationProps) {
  const { activeChat } = useChatsController();

  return (
    <div className="messages-container" data-testid={dataTestId}>
      {activeChat?.messages.map(({ content, authored, instanceId }) => (
        <Message
          key={instanceId}
          authored={authored}
          text={content}
          messageId={instanceId}
        />
      ))}
    </div>
  );
});

type ConservsationProps = {
  dataTestId?: string;
};
