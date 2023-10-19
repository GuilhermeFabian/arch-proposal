import { ChatsController } from "@/features/chats/controllers/ChatsController";
import { UsersController } from "@/features/users/controllers/UsersController";
import { makeAutoObservable } from "mobx";

class ApplicationStore {
  public readonly usersController: UsersController = new UsersController();
  public readonly chatsController: ChatsController = new ChatsController();

  public constructor() {
    makeAutoObservable(this);
  }
}

export const applicationStore = new ApplicationStore();
