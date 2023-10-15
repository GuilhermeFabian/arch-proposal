export class User implements UserData {
  public readonly id: string = "";
  public readonly name: string = "";

  public constructor(userData: UserData) {
    this.id = userData.id;
    this.name = userData.name;
  }
}

export function isUserData(data: unknown): data is UserData {
  return (
    data !== null && typeof data === "object" && "id" in data && "name" in data
  );
}

export interface UserData {
  id: string;
  name: string;
}

export type UserId = UserData["id"];
