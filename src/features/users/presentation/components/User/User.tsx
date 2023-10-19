import { useUsersController } from "@/features/users/controllers/UsersController";
import "./User.scss";

export function User({ name, online, id }: UserProps) {
  const { onClickUser } = useUsersController();
  return (
    <div className="user" onClick={() => onClickUser(id)}>
      <img
        className={online ? "user__status-online" : "user__status-offline"}
        src="https://pa1.aminoapps.com/6172/caacb747a9fbea40461055450823c1b13a5b208c_128.gif"
        alt="avatar"
      />
      <div
        id="avatar-indicator"
        className={online ? "user__status-online" : "user__status-offline"}
      ></div>
      <span className="user__name">{name}</span>
    </div>
  );
}

type UserProps = {
  name: string;
  online: boolean;
  id: string;
};
