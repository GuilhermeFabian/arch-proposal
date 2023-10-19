import { faker } from "@faker-js/faker";
import { ChatMessage } from "../domain/ChatMessage";

export function getMessagesFromChat(chatId: string) {
  const latency = faker.number.int({ min: 10, max: 200 });
  const numberOfMessages = faker.number.int({ min: 0, max: 30 });
  const messages = Array.from({ length: numberOfMessages }, () =>
    makeMessage(chatId)
  );

  return new Promise((resolve) => setTimeout(() => resolve(messages), latency));
}

function makeMessage(chatId: string) {
  return new ChatMessage({
    content: faker.word.words({ count: { min: 1, max: 30 } }),
    authored: faker.number.int({ min: 0, max: 1 }) === 0,
    chatId,
  });
}
