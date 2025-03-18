const socials = [
  { name: "Github", href: "https://github.com/mateuscqueiros" },
  { name: "Linkedin", href: "https://www.linkedin.com/in/mateuscqueiros" },
  {
    name: "Email",
    title: "mateuscqueiros@gmail.com",
    href: "mailto:mateuscqueiros@gmail.com",
  },
];

export function HomePage() {
  return (
    <div className="space-y-12 prose-headings:dark:text-white prose-h2:mb-4 prose-headings:mt-0 prose-h2:font-semibold prose-p:last:mb-0">
      <section className="w-full flex flex-col items-start">
        <img
          src="/me.jpg"
          alt="me"
          className="w-full max-w-[90px] rounded-full not-prose mb-8"
        />
        <h1 className="font-mono !mb-0 !text-3xl">Hello, I'm Mateus!</h1>
        <p className="!mb-0">
          I'm a software developer and instructor with a passion for building
          scalable solutions. With expertise in React, Next.js, Node.js, and Go,
          I create high-performance applications while focusing on user
          experience and optimization.
        </p>
        <p>
          I also teach programming, helping others master front-end and back-end
          technologies through a hands-on approach. Whether coding or mentoring,
          my goal is to create, improve, and share knowledge.
        </p>
      </section>
      <section>
        <h2>History</h2>
        <p>
          I’ve learned to adapt to different challenges, whether developing
          applications or teaching programming. Flexibility and attention to
          detail have been key in delivering practical solutions. Every project
          has been an opportunity to stay open to new ideas and continue
          improving.
        </p>
        <div className="space-y-4 prose-p:my-0">
          {/*<div>
          <a
              target="_blank"
              href="https://www.calian.com/"
              className="block mb-1 font-mono font-bold"
            >
              Calian Corporate
            </a>
            <div className="text-sm">
              <p>Desenvolvedor Full Stack</p>
              <p>Mar. 2025 - atual</p>
            </div>
          </div>*/}

          <div>
            <a
              target="_blank"
              href="https://www.fiap.com.br/"
              className="block mb-1 font-mono font-bold"
            >
              Fiap Treinamentos
            </a>
            <div className="text-sm">
              <p>Programming Menthoring</p>
              <p>Jan. 2024 - atual</p>
            </div>
          </div>

          <div>
            <a
              target="_blank"
              href="https://hcode.com.br/"
              className="block mb-1 font-mono font-bold"
            >
              Hcode Consultoria e Tecnologia
            </a>
            <div className="text-sm">
              <p>Full-Stack Developer and Instructor</p>
              <p>Jun. 2020 - current</p>
            </div>
            <div className="text-sm mt-2">
              <p>Technical Support</p>
              <p>Jun. 2020 - Jun.2022</p>
            </div>
          </div>
        </div>
      </section>

      {/*<section>
        <h2>Notas</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </section>*/}

      <section>
        <h2>Contato</h2>
        <p>If you have any project or proposal in mind these are my links.</p>
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
                {social.title ?? social.href}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
