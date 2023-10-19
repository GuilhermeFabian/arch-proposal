import { render, cleanup } from "@testing-library/react";
import { Conversation } from ".";
import { ChatsControllerProvider } from "../../providers/ChatsControllerProvider";
import { ChatsController } from "@/features/chats/controllers/ChatsController";

import * as getChats from "../../../api/getChats";
import { Chat } from "@/features/chats/domain/Chat";
import { User } from "@/features/users/domain/User";
import { faker } from "@faker-js/faker";
import { ChatMessage } from "@/features/chats/domain/ChatMessage";

const getChatsSpy = jest.spyOn(getChats, "getChats");

describe("Conversation Component", () => {
  afterEach(cleanup);

  test("Should render conversation messages", async () => {
    const message1 = new ChatMessage({
      authored: faker.number.int({ min: 0, max: 1 }) === 0,
      chatId: faker.string.uuid(),
      content: "Chat1 message 1",
    });
    const message2 = new ChatMessage({
      authored: faker.number.int({ min: 0, max: 1 }) === 0,
      chatId: faker.string.uuid(),
      content: "Chat1 message 1",
    });

    const chat1 = new Chat({
      user: new User({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        online: faker.number.int({ min: 0, max: 1 }) === 0,
      }),
      messages: [message1, message2],
    });

    getChatsSpy.mockReturnValueOnce(Promise.resolve([chat1]));
    const chatsController = new ChatsController();
    await (chatsController.loadChats() as unknown as Promise<unknown>);
    chatsController.openChat(chat1.user);

    const { getByTestId } = render(
      <ChatsControllerProvider controller={chatsController}>
        <Conversation />
      </ChatsControllerProvider>
    );

    expect(getByTestId(message1.instanceId).textContent).toBe(message1.content);
  });
});
