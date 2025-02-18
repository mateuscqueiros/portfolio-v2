import { Outlet } from "react-router";
import { Header } from "./header";

export type MainLayoutProps = {};

export function MainLayout({}: MainLayoutProps) {
  return (
    <>
      <div className="max-w-4xl flex flex-col items-center mx-auto px-6">
        <Header />
        <main className="w-full flex flex-col">
          <Outlet />
        </main>
      </div>
    </>
  );
}
