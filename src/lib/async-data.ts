export class AsyncData {
  private _state: AsyncDataStates = AsyncDataStates.IDLE;
  public constructor() {}

  public get data(): 10 {
    return 10;
  }
}

export const AsyncDataStates: AsyncDataStateEnum = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  READY: "READY",
  ERROR: "ERROR",
};

export type AsyncDataStates = keyof AsyncDataStateEnum;

type TupleToEnum<T extends readonly string[]> = {
  readonly [P in Uppercase<T[number]>]: Uppercase<P>;
};

type AsyncDataStateEnum = TupleToEnum<["idle", "loading", "ready", "error"]>;
