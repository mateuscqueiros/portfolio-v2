export function HomePage() {
  return (
    <>
      <div className="w-full flex flex-col items-start mt-10">
        <img
          src="/src/assets/me.jpg"
          alt="me"
          className="w-full max-w-[90px] rounded-full mb-10"
        />
        <h1 className="text-3xl font-bold font-mono mb-4">
          Olá, meu nome é Mateus
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </>
  );
}
