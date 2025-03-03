import { Outlet } from "react-router";
import { Header } from "./header";
import { ToggleTheme } from "./toggle-theme";

export type MainLayoutProps = {};

export function MainLayout({}: MainLayoutProps) {
  return (
    <>
      <div
        className={`relative max-w-3xl mt-[60px] flex flex-col items-center mx-auto px-3 pb-20 min-h-[calc(100vh-60px)]
        prose prose-sm md:prose-base prose-slate dark:prose-invert prose-a:hover:text-primary`}
      >
        <Header />
        <main className="w-full flex flex-col pt-10 mb-3">
          <Outlet />
        </main>
        <footer className="py-7 absolute bottom-0 flex justify-between items-center footer mx-auto px-3 text-xs w-full">
          <span className="font-mono dark:text-white text-muted-foreground">
            Copyright © 2025 Mateus Queirós
          </span>
          <ToggleTheme />
        </footer>
      </div>
    </>
  );
}
