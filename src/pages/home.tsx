const socials = [
  { name: "Github", href: "https://github.com/mateuscqueiros" },
  { name: "Linkedin", href: "https://www.linkedin.com/in/mateuscqueiros/" },
  { name: "Email", href: "mailto:mateuscqueiros@gmail.com" },
];

export function HomePage() {
  return (
    <div className="space-y-12 prose-headings:dark:text-white prose-h2:mb-4 prose-headings:mt-0 prose-h2:font-semibold">
      <section className="w-full flex flex-col items-start">
        <img
          src="/me.jpg"
          alt="me"
          className="w-full max-w-[90px] rounded-full not-prose mb-8"
        />
        <h1 className="font-mono !mb-0 !text-3xl">Olá, sou Mateus</h1>
        <p className="!mb-0">
          I'm a software engineer focused on delivering high-quality products. I
          enjoy working where design and engineering intersect, building
          software that's visually appealing and technically solid.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section>
        <h2>Trabalho</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="space-y-4 prose-p:my-0">
          <div>
            <a
              target="_blank"
              href="https://www.calian.com/"
              className="block mb-1 font-mono font-bold"
            >
              Calian Corporate
            </a>
            <div className="text-sm">
              <p>Desenvolvedor Full Stack</p>
              <p>Mar.2025 - atual</p>
            </div>
          </div>

          <div>
            <a
              target="_blank"
              href="https://www.fiap.com.br/"
              className="block mb-1 font-mono font-bold"
            >
              Fiap Treinamentos
            </a>
            <div className="text-sm">
              <p>Professor de Programação</p>
              <p>Jan.2024 - atual</p>
            </div>
          </div>

          <div>
            <a
              target="_blank"
              href="https://github.com/mateuscqueiros/mateuscqueiros.github.io"
              className="block mb-1 font-mono font-bold"
            >
              Hcode Treinamentos
            </a>
            <div className="text-sm">
              <p>Desenvolvedor Full Stack</p>
              <p>Jun.2020 - atual</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Notas</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </section>

      <section>
        <h2>Contato</h2>
        <p>
          Se você tem algum projeto em mente, ou tem alguma proposta, estes são
          meus links.
        </p>
        <ul className="prose-ul:m-0 !m-0 !p-0 prose-ul:p-0 flex flex-col gap-y-4">
          {socials.map((social) => (
            <li
              key={social.name}
              className="list-none !p-0 !m-0 flex flex-row flex-wrap gap-2"
            >
              <span className="block min-w-[200px]">{social.name}</span>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="block min-w-[350px]"
              >
                {social.href}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
