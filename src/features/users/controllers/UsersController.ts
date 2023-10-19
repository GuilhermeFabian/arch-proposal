import { makeAutoObservable } from "mobx";
import { User } from "../domain/User";
import { getUsers } from "../api/UsersService";
import type { UserData } from "../domain/User";
import React from "react";

export class UsersController {
  public readonly users: User[] = [];
  public userClickCallbacks: ((user: User) => void)[] = [];
  public state: string = "idle";
  // private readonly getUsers: getUsers;

  public constructor(/*getUsers: getUsers*/) {
    // this.getUsers = getUsers;
    makeAutoObservable(this);
  }

  public *loadUsers(): Generator<ReturnType<getUsers>, void, UserData[]> {
    if (this.state === "pending") return;

    this.state = "pending";
    const usersData = yield getUsers();
    const users = Array.from(usersData, (userData) => new User(userData));

    this.users.splice(0, this.users.length);
    this.users.push(...users);
    this.state = "ready";
  }

  public listenUserClick = (callback?: (user: User) => void) => {
    if (!callback) return;

    this.userClickCallbacks.push(callback);
  };

  public onClickUser = (userId: string) => {
    const user = this.users.find((user) => user.id === userId);
    if (user) {
      for (const callback of this.userClickCallbacks) callback(user);
    }
  };
}

const Context = React.createContext<UsersController | undefined>(undefined);

export function useUsersController(): UsersController {
  const controller = React.useContext(Context);
  if (!controller) {
    throw new Error("Cannot use context outside of the feature.");
  }

  return controller;
}

export const UsersProvider = Context.Provider;
