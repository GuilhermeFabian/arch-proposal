import { faker } from "@faker-js/faker";

export function genUsers(): Promise<Response[]> {
  const latency = faker.number.int({ min: 50, max: 2000 });
  const numberOfUsers = faker.number.int({ min: 5, max: 30 });
  const users = Array.from({ length: numberOfUsers }, () => ({
    name: faker.person.fullName(),
    id: faker.string.uuid(),
  }));

  return new Promise((resolve) => setTimeout(() => resolve(users), latency));
}

type Response = {
  name: string;
  id: string;
};
