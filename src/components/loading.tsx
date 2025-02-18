import { Suspense } from "react";

export type LoadingSupenseProps = {
  message?: string;
} & React.PropsWithChildren;

export function LoadingSupense({ message, children }: LoadingSupenseProps) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto text-md w-fit mt-10">
          <span>{message || "Carregando..."}</span>
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
