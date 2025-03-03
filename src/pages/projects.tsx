import { ProjectCard } from "../components/project-card";

export const projects = [
  {
    title: "Portfolio",
    description: "A minimalist portfolio built with React and Tailwind CSS.",
    link: "https://github.com/mateuscqueiros/portfolio-v2",
    tags: ["react", "tailwindcss", "typescript"],
  },
  {
    title: "Tiptap Comments",
    description: "A template for using Tiptap comments in your project.",
    link: "https://github.com/mateuscqueiros/tiptap-comments",
    tags: ["tiptap", "react"],
  },
  {
    title: "MERN",
    description: "A MERN app for managing employees.",
    link: "https://github.com/mateuscqueiros/mern-employees",
    tags: ["mongodb", "express", "react", "node"],
  },
  {
    title: "Dotfiles",
    description:
      "My work environment using Neovim, Tmux and Zsh. Try it using the auto config script on your WSL environment.",
    link: "https://github.com/mateuscqueiros/tiptap-comments",
    tags: ["neovim", "tmux", "zsh"],
  },
  {
    title: "Exams",
    description: "A tool to manage and apply exams to a class.",
    link: "https://github.com/mateuscqueiros/exams",
    tags: ["supabase", "react", "mantine"],
  },
  {
    title: "React Template",
    description:
      "A boilerplate for bootstrapping a React project with modern tools.",
    link: "https://github.com/mateuscqueiros/react-template",
    tags: ["react"],
  },
  {
    title: "Travel App",
    description: "A travel app built with React Native and Expo.",
    link: "https://github.com/mateuscqueiros/travel-app-native",
    tags: ["react-native", "expo", "tailwindcss"],
  },
  {
    title: "Accountant",
    description: "An app to manage your personal finances.",
    link: "https://accountant-mt.vercel.app/",
    tags: ["nextjs", "react", "mantine"],
  },
  {
    title: "Nubank Concept",
    description: "A concept for a banking app.",
    link: "https://nubank-concept.vercel.app/",
    tags: ["nextjs", "react", "tailwindcss"],
  },
];

export function ProjectsPage() {
  return (
    <div>
      <h1 className="!mt-0 !mb-2">Projects</h1>
      <p>
        Below are some of my projects. More can be found on{" "}
        <a target="_blank" href="https://github.com/mateuscqueiros">
          {" "}
          my Github.
        </a>
      </p>
      <hr className="!my-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
}
