import type { User } from "src/features/users/domain/User";
import type { ChatMessage } from "./ChatMessage";
import { faker } from "@faker-js/faker";

export class Chat implements ChatData {
  public readonly user: User;
  public readonly messages: ChatMessage[] = [];
  public readonly id: string = "";
  public readonly instanceId: string = faker.string.uuid();
  public state: State = "idle";

  public constructor(chatData: ChatData) {
    this.user = chatData.user;
    this.id = chatData.id ?? "";
    this.messages.push(...(chatData.messages ?? []));
  }
}

type State = "idle" | "loading" | "ready" | "error";

export interface ChatData {
  user: User;
  messages?: ChatMessage[];
  id?: string;
}
