import { useUsersController } from "@/features/users/controllers/UsersController";
import { User } from "../User";
import { observer } from "mobx-react-lite";

export function UsersRoot() {
  const usersController = useUsersController();
  usersController.loadUsers();

  return <UsersList />;
}

const UsersList = observer(function UsersList() {
  const { users } = useUsersController();

  return (
    <div className="user-list">
      <div className="user-title">Usuários</div>
      {users.map(({ id, name, online }) => (
        <User key={id} name={name} online={online} id={id} />
      ))}
    </div>
  );
});
