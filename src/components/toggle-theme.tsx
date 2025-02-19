import { useEffect, useState } from "react";

export function ToggleTheme() {
  const [theme, setTheme] = useState(
    () => window.localStorage.getItem("theme") || "dark",
  );

  const setThemeDark = () => {
    window.localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  const setThemeLight = () => {
    window.localStorage.setItem("theme", "light");
    setTheme("light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    const meta: any = document.querySelector("meta[name='theme-color']");
    if (!meta) return;
    meta.content = theme === "dark" ? "#0c192a" : "#ffffff";
  }, [theme]);

  return (
    <div className="flex h-8 items-center justify-between gap-1 rounded-md border border-slate-300 dark:border-slate-700 p-1">
      <button
        onClick={setThemeLight}
        data-active={theme === "light" ? "true" : undefined}
        className={`cursor-pointer inline-flex items-center justify-center whitespace-nowrap
          rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden
          focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none
          disabled:opacity-50 hover:bg-primary/10 hover:text-primary
          data-active:bg-primary/10 data-active:text-primary size-6`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-sun size-4"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      </button>
      <button
        onClick={setThemeDark}
        data-active={theme === "dark" ? "true" : undefined}
        className={`cursor-pointer inline-flex items-center justify-center whitespace-nowrap
          rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden
          focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none
          disabled:opacity-50 hover:bg-primary/10 hover:text-primary
          data-active:bg-primary/10 data-active:text-primary size-6`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-moon size-4"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </button>
    </div>
  );
}
