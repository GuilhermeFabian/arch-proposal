import { faker } from "@faker-js/faker";
import type { User } from "../domain/User";
import { dbUsers } from "@/fakedb/fakedb";

export function getUsers(): Promise<User[]> {
  const latency = faker.number.int({ min: 50, max: 2000 });

  return new Promise((resolve) => setTimeout(() => resolve(dbUsers), latency));
}

export type getUsers = typeof getUsers;
