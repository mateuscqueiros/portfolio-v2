const socials = [
  { name: "Github", href: "https://github.com/mateusqueiros" },
  { name: "Linkedin", href: "https://www.linkedin.com/in/mateusqueiros/" },
  { name: "Email", href: "mailto:mateuscqueiros@gmail.com" },
];

export function HomePage() {
  return (
    <div className="space-y-12 prose-p:mb-0 prose-headings:dark:text-white prose-h2:mb-4 prose-headings:mt-0 prose-h2:font-semibold">
      <section className="w-full flex flex-col items-start">
        <img
          src="/me.jpg"
          alt="me"
          className="w-full max-w-[90px] rounded-full mt-0"
        />
        <h1 className="font-mono mb-0">Olá, sou Mateus</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section>
        <h2>Trabalho</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>

      <section>
        <h2>Trabalho</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>

      <section>
        <h2>Trabalho</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section>
        <h2>Contato</h2>
        <ul className="prose-ul:m-0 !m-0 !p-0 prose-ul:p-0">
          {socials.map((social) => (
            <li key={social.name} className="list-none p-0 m-0 flex flex-row">
              <span className="block min-w-[200px]">{social.name}</span>
              <a href={social.href} target="_blank" rel="noreferrer">
                {social.href}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
