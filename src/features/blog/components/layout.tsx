export function BlogPageLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <main className="mx-auto px-6">{children}</main>
    </>
  );
}
