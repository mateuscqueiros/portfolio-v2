export function HomePage() {
  return (
    <div className="prose">
      <div className="w-full flex flex-col items-start mt-10 prose-p:dark:text-slate-300 prose-headings:dark:text-white">
        <img
          src="/me.jpg"
          alt="me"
          className="w-full max-w-[90px] rounded-full mt-0"
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
