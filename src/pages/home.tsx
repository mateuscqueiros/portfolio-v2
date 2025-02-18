export function HomePage() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="prose">
      <div className="w-full flex flex-col items-start mt-10 prose prose-p:dark:text-slate-300 prose-headings:dark:text-white">
        <img
          onClick={toggleTheme}
          src="/src/assets/me.jpg"
          alt="me"
          className="w-full max-w-[90px] rounded-full mb-10"
        />
        <h1 className="font-mono">Olá, sou Mateus</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}
