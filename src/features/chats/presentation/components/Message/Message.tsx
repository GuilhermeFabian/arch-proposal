export function Message({ authored, text, messageId }: MessageProps) {
  return (
    <p className={authored ? "user-message" : "autor-message"}>
      <span
        className={authored ? "user-message-text" : "autor-message-text"}
        data-testid={`${messageId}`}
      >
        {text}
      </span>
    </p>
  );
}

type MessageProps = {
  text: string;
  authored: boolean;
  messageId: string;
};
