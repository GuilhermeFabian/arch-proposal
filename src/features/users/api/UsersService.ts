import { faker } from "@faker-js/faker";
import { User } from "../domain/User";

export function getUsers(): Promise<User[]> {
  const latency = faker.number.int({ min: 50, max: 2000 });
  const numberOfUsers = faker.number.int({ min: 5, max: 30 });
  const users = Array.from({ length: numberOfUsers }, makeUser);

  return new Promise((resolve) => setTimeout(() => resolve(users), latency));
}

function makeUser(): User {
  return new User({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
  });
}

export type getUsers = typeof getUsers;

export interface GetUsers {
  getUsers: typeof getUsers;
}
