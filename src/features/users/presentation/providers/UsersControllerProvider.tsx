import type { ReactElement, ReactNode } from "react";
import type { UsersController } from "../../controllers/UsersController";
import {
  UsersProvider,
  // useUsersController,
} from "../../controllers/UsersController";

export function UsersControllerProvider({
  children,
  controller,
}: Props): ReactElement {
  // const usersController = useUsersController();

  return <UsersProvider value={controller}>{children}</UsersProvider>;
}

type Props = {
  children?: ReactNode;
  controller: UsersController;
};
