import { makeAutoObservable } from "mobx";
import React from "react";

import { Chat } from "../domain/Chat";
import { getChats } from "../api/getChats";

import type { User, UserId } from "@/features/users/domain/User";

export class ChatsController {
  public readonly chats: Record<UserId, Chat> = {};
  public readonly users: Record<UserId, User> = {};
  public readonly chatsMap: Map<UserId, Chat> = new Map();
  public readonly activeChats: Record<UserId, Chat> = {};
  public activeChatUser: UserId = "todas";
  public state: string = "idle";

  public constructor() {
    makeAutoObservable(this);
  }

  public *loadChats(): Generator<ReturnType<typeof getChats>, void, Chat[]> {
    if (this.state === "pending") return;

    this.state = "pending";
    const chats = yield getChats();

    chats.map((chat) => {
      this.chats[chat.user.id] = chat;
    });

    this.state = "ready";
  }

  public get activeChatsTabs() {
    const messageChats = Object.values(this.activeChats).map(({ user }) => ({
      key: user.id,
      tab: user.name,
    }));

    return [
      {
        key: "todas",
        tab: "Todas",
      },
      ...messageChats,
    ];
  }

  public get activeChat() {
    return this.chats[this.activeChatUser];
  }

  public onSwitchChat = (userId: UserId) => {
    this.activeChatUser = userId;
  };

  public openChat = (user: User) => {
    let chat = this.chats[user.id];

    if (!chat) {
      chat = new Chat({ user });
      this.chats[user.id] = chat;
    }

    if (!(user.id in this.activeChats)) {
      this.activeChats[user.id] = chat;
    }

    this.activeChatUser = user.id;
  };
}

const chatsController = new ChatsController();
const Context = React.createContext(chatsController);

export function useChatsController() {
  return React.useContext(Context);
}

export const ChatsProvider = Context.Provider;
