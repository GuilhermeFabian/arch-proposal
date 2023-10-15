// import { User } from "features/users/domain/User";
import type { User } from "src/features/users/domain/User";
import type { ChatMessage } from "./ChatMessage";

export class Chat implements ChatDTO {
  public readonly user: User;
  public readonly messages: ChatMessage[] = [];
  public readonly id: string = crypto.randomUUID();
  public state: State = "idle";

  public constructor(chatData: ChatDTO) {
    this.user = chatData.user;

    if (chatData.messages !== undefined) {
      this.messages.push(...chatData.messages);
    }
  }

  // private *loadMessages(): Generator<> {

  // }
}

type State = "idle" | "loading" | "ready" | "error";

export interface ChatDTO {
  user: User;
  messages?: ChatMessage[];
}
