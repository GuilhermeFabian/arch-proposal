export class ChatMessage implements ChatMessageDTO {
  public readonly content: string = "";
  public readonly edited: boolean = false;

  public constructor(messageData: ChatMessageDTO) {
    Object.assign(this, messageData);
  }
}

export interface ChatMessageDTO {
  content: string;
  edited: boolean;
}
