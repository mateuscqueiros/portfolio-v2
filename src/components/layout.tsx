import { Outlet } from "react-router";
import { Header } from "./header";
import { ToggleTheme } from "./toggle-theme";

export type MainLayoutProps = {};

export function MainLayout({}: MainLayoutProps) {
  return (
    <>
      <div className="relative max-w-3xl flex flex-col items-center mx-auto px-6 pb-12 prose prose-slate min-h-dvh">
        <Header />
        <main className="w-full flex flex-col">
          <Outlet />
        </main>
        <footer className="py-4 absolute bottom-0 flex justify-between items-center footer max-w-2xl mx-auto text-xs w-full">
          <span className="font-mono dark:text-white text-black">
            Copyright © 2025 Mateus Queirós
          </span>
          <ToggleTheme />
        </footer>
      </div>
    </>
  );
}
