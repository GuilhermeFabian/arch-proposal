import { ChatsController } from "../../controllers/ChatsController";
import { ChatsProvider } from "../../controllers/ChatsController";

import type { ReactElement, ReactNode } from "react";

export function ChatsControllerProvider({
  children,
  controller,
}: Props): ReactElement {
  return (
    <ChatsProvider value={controller ?? new ChatsController()}>
      {children}
    </ChatsProvider>
  );
}

type Props = {
  children?: ReactNode;
  controller?: ChatsController;
};
