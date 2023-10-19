import { UsersController } from "./UsersController";
import * as UsersService from "../api/UsersService";
import { User } from "../domain/User";
import { faker } from "@faker-js/faker";

const getUsersSpy = jest.spyOn(UsersService, "getUsers");

describe("UsersController", () => {
  test("Should load all available users", async () => {
    const user1 = new User({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      online: faker.number.int({ min: 0, max: 1 }) === 0,
    });
    const user2 = new User({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      online: faker.number.int({ min: 0, max: 1 }) === 0,
    });

    getUsersSpy.mockReturnValueOnce(Promise.resolve([user1, user2]));

    const sut = new UsersController(/*UsersService.getUsers*/);

    await (sut.loadUsers() as unknown as Promise<unknown>);

    expect(getUsersSpy).toBeCalledTimes(1);
    expect(sut.users).toEqual([user1, user2]);
  });
});
