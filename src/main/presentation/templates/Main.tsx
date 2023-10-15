import type { ReactElement } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import { Chats } from "/features/chats/presentation";
// import { Chats } from "../../../features/chats/presentation";
// import { Users } from "@/features/users/presentation";
import { Layout } from "@/ds/ui/structural/Layout/Layout";
import { Users } from "@/features/users/presentation";

export function Main(): ReactElement {
  // const navigate = useNavigate();

  return (
    <Layout leftSide={<Users />} rightSide={<div>RIGHT</div>}>
      teste
    </Layout>
    // <div>
    //   <Users />
    //   <Chats />
    //   <div>
    //     <button onClick={() => navigate("/comp1")}>Comp1</button>
    //     <button onClick={() => navigate("/comp2")}>Comp2</button>
    //   </div>
    //   <Outlet />
    // </div>
  );
}
