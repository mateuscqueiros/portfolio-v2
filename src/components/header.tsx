import { Link, useLocation, useResolvedPath } from "react-router";

const headerLinks = [
  { name: "home", href: "/" },
  { name: "blog", href: "/blog" },
  { name: "resume", href: "/resume-en.pdf" },
];

export function Header() {
  const path = useLocation();

  return (
    <>
      <header className="w-full flex flex-row flex-wrap justify-between items-center my-4 pb-4 px-4">
        <Link className="shadow-none hover:shadow-none" to="/" viewTransition>
          <h2 className="text-xl font-semibold text-center md:text-left font-mono line-clamp-4">
            Mateus Queirós
          </h2>
        </Link>
        <ul className="flex flex-row flex-wrap items-center space-x-4">
          {headerLinks.map((link) => (
            <li key={link.name}>
              <Link
                className={`text-sm font-medium decoration-[0.1em] underline-offset-4 decoration-wavy decoration-primary hover:underline hover:text-primary ${path.pathname === link.href ? "underline" : ""}`}
                to={{ pathname: link.href }}
                target={link.name === "resume" ? "_blank" : ""}
                viewTransition
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}
