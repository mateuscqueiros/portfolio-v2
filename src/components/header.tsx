import { Link, useLocation } from "react-router";

const headerLinks = [
  { name: "home", href: "/" },
  { name: "notes", href: "/notes" },
  { name: "projects", href: "/projects" },
  { name: "resume", href: "/resume-en.pdf" },
];

export function Header() {
  const path = useLocation();

  return (
    <>
      <header className="fixed top-0 bg-body w-full my-4 py-4 mb-0 dark:text-white gap-y-4">
        <div className="mx-auto max-w-3xl px-3 flex flex-row flex-wrap justify-between items-center">
          <Link
            className="shadow-none hover:shadow-none not-prose"
            to="/"
            viewTransition
          >
            <h2 className="text-md font-semibold text-center md:text-left font-mono line-clamp-4 not-prose text-black dark:text-white">
              Mateus Queirós
            </h2>
          </Link>
          <ul className="flex flex-row flex-wrap items-center space-x-4 not-prose text-black dark:text-white">
            {headerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  className={`not-prose text-sm font-medium decoration-[0.1em] underline-offset-4 decoration-wavy
                  decoration-primary hover:underline hover:text-primary ${path.pathname === link.href ? "underline" : ""}`}
                  to={{ pathname: link.href }}
                  target={link.name === "resume" ? "_blank" : ""}
                  viewTransition
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
