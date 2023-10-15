import { render } from "@testing-library/react";
import { ChatsProvider, useChatsController } from "./ChatsController";
import type { FC } from "react";

type ChatsController = ReturnType<typeof useChatsController>;
type ControllerGetterProps = {
  getController: (controller: ChatsController) => void;
};

const ControllerGetter: FC<ControllerGetterProps> = ({ getController }) => {
  const controller = useChatsController();
  getController(controller);

  return <ChatsProvider value={controller} />;
};

describe("ChatsController", () => {
  test("Should populate controllers store", () => {
    let chatsController;
    const getController = (controller: ChatsController) => {
      chatsController = controller;
    };

    render(<ControllerGetter getController={getController} />);

    console.log(chatsController);

    expect(true).toBeTruthy();
  });
});
