import { Suspense } from "react";

export type LoadingSupenseProps = { message: string } & React.PropsWithChildren;

export function LoadingSupense({ message, children }: LoadingSupenseProps) {
  return (
    <Suspense fallback={<h1 className="mx-auto w-fit mt-10">{message}</h1>}>
      {children}
    </Suspense>
  );
}
