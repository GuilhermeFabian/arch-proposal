import { makeAutoObservable } from "mobx";
import { User } from "../domain/User";
import { getUsers } from "../api/UsersService";
import type { UserData } from "../domain/User";

export class UsersController {
  public readonly users: User[] = [];
  // private readonly getUsers: getUsers;

  public constructor(/*getUsers: getUsers*/) {
    // this.getUsers = getUsers;
    makeAutoObservable(this);
  }

  public *loadUsers(): Generator<ReturnType<getUsers>, void, UserData[]> {
    const usersData = yield getUsers();
    const users = Array.from(usersData, (userData) => new User(userData));

    this.users.push(...users);
  }
}
