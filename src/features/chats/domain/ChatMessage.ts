import { faker } from "@faker-js/faker";

export class ChatMessage implements ChatMessageData {
  public readonly content: string = "";
  public readonly edited: boolean = false;
  public readonly authored: boolean = false;
  public readonly chatId: string = faker.string.uuid();
  public readonly instanceId: string = faker.string.uuid();

  public constructor(messageData: ChatMessageData) {
    Object.assign(this, messageData);
  }
}

export interface ChatMessageData {
  content: string;
  authored: boolean;
  chatId: string;
}
