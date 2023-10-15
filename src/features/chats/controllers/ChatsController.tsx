import { makeAutoObservable } from "mobx";
import React from "react";

import { Chat } from "../domain/Chat";
import type { User } from "@/features/users/domain/User";

export class AsyncData {
  private _state: AsyncDataStates = AsyncDataStates.IDLE;
  public constructor() {}

  public get data(): 10 {
    return 10;
  }
}

export const AsyncDataStates: AsyncDataStateEnum = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  READY: "READY",
  ERROR: "ERROR",
};

export type AsyncDataStates = keyof AsyncDataStateEnum;

type TupleToEnum<T extends readonly string[]> = {
  readonly [P in Uppercase<T[number]>]: Uppercase<P>;
};

type AsyncDataStateEnum = TupleToEnum<["idle", "loading", "ready", "error"]>;

class ChatsController {
  public readonly chats: Record<User["id"], Chat> = {};
  public readonly users: Record<User["id"], User> = {};
  public readonly chatsMap: Map<User["id"], Chat> = new Map();
  public readonly activeChats: Chat[] = [];

  public constructor() {
    makeAutoObservable(this);
  }
  //
  public openChat = (userId: User["id"]) => {
    let chat = this.chats[userId];

    const test = new Map<User["id"], Chat>();
    test.get(userId);

    if (!chat) {
      const user = this.users[userId];
      chat = new Chat({ user });
    }

    this.activeChats.push(chat);
  };
}

const chatsController = new ChatsController();
const Context = React.createContext(chatsController);

export function useChatsController() {
  return React.useContext(Context);
}

export const ChatsProvider = Context.Provider;
