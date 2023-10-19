import { Chat } from "@/features/chats/domain/Chat";
import { ChatMessage } from "@/features/chats/domain/ChatMessage";
import { User } from "@/features/users/domain/User";
import { faker } from "@faker-js/faker";

export const dbUsers = generateUsers();
export const dbChats = generateChats();

function generateChats(): Chat[] {
  const usersList = [...dbUsers];
  const usersWithConversation = [];
  let numberOfChats = faker.number.int({ min: 3, max: dbUsers.length });

  while (numberOfChats--) {
    const randomIndex = faker.number.int({ min: 0, max: usersList.length - 1 });
    usersWithConversation.push(...usersList.splice(randomIndex, 1));
  }

  const chats = usersWithConversation.map((user) => makeChat(user));

  return chats;
}

function makeChat(user: User) {
  const id = faker.string.uuid();
  return new Chat({
    user,
    id: id,
    messages: generateMessagesFromChat(id),
  });
}

function generateUsers(): User[] {
  const numberOfUsers = faker.number.int({ min: 5, max: 30 });
  const users = Array.from({ length: numberOfUsers }, makeUser);

  return users;
}

function makeUser(): User {
  return new User({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    online: faker.number.int({ min: 0, max: 1 }) === 0,
  });
}

function generateMessagesFromChat(chatId: string) {
  const numberOfMessages = faker.number.int({ min: 0, max: 30 });
  const messages = Array.from({ length: numberOfMessages }, () =>
    makeMessage(chatId)
  );

  return messages;
}

function makeMessage(chatId: string) {
  return new ChatMessage({
    content: faker.word.words({ count: { min: 1, max: 30 } }),
    authored: faker.number.int({ min: 0, max: 1 }) === 0,
    chatId,
  });
}
