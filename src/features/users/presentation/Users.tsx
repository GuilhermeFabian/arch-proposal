import { UsersController } from "../controllers/UsersController";
import type { User } from "../domain/User";
import "./Users.scss";
import { UsersRoot } from "./components/UsersRoot";
import { UsersControllerProvider } from "./providers/UsersControllerProvider";

export function Users({ controller, onClickUser }: Props) {
  const usersController = controller ?? new UsersController();
  usersController.listenUserClick(onClickUser);

  return (
    <UsersControllerProvider controller={usersController}>
      <UsersRoot />
    </UsersControllerProvider>
  );
}

type Props = {
  controller?: UsersController;
  onClickUser?: (user: User) => void;
};
