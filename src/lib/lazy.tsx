import type { ComponentType, PropsWithChildren } from "react";
import { Suspense, lazy } from "react";

export function emptyLazy<F extends ComponentType<PropsWithChildren>>(
  factory: () => Promise<{ default: F }>
) {
  const Component = lazy(
    factory
  ) as unknown as ComponentType<PropsWithChildren>;

  // eslint-disable-next-line react/display-name
  return (props: PropsWithChildren) => (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
}
