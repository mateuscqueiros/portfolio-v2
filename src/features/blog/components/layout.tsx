import { Outlet } from "react-router";
import { BlogHeader } from "./header";

export function BlogPageLayout() {
  return (
    <>
      <BlogHeader />
      <main className="max-w-4xl flex flex-col items-center mx-auto px-4 sm:px-6">
        <Outlet />
      </main>
    </>
  );
}
