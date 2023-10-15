import {
  ChatsProvider,
  useChatsController,
} from "../../controllers/ChatsController";

import type { ReactElement, ReactNode } from "react";

export function ChatsControllerProvider({ children }: Props): ReactElement {
  const chatsController = useChatsController();

  return <ChatsProvider value={chatsController}>{children}</ChatsProvider>;
}

type Props = {
  children?: ReactNode;
};
