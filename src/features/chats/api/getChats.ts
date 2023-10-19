import { dbChats } from "@/fakedb/fakedb";
import { faker } from "@faker-js/faker";

export function getChats() {
  const latency = faker.number.int({ min: 10, max: 200 });

  return new Promise((resolve) => setTimeout(() => resolve(dbChats), latency));
}
