export class User implements UserData {
  public readonly id: string = "";
  public readonly name: string = "";
  public readonly online: boolean = false;

  public constructor(userData: UserData) {
    this.id = userData.id;
    this.name = userData.name;
    this.online = userData.online;
  }
}

export function isUserData(data: unknown): data is UserData {
  return (
    data !== null &&
    typeof data === "object" &&
    "id" in data &&
    "name" in data &&
    "online" in data
  );
}

export interface UserData {
  id: string;
  name: string;
  online: boolean;
}

export type UserId = UserData["id"];
