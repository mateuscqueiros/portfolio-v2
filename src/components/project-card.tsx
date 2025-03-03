export type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export function ProjectCard({
  title,
  description,
  link,
  tags,
}: ProjectCardProps) {
  return (
    <div className="group rounded-lg shadow-md p-4 cursor-pointer border-1 dark:border-gray-600 border-gray-200">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="h-full block no-underline !text-white"
      >
        <h4 className="!mt-0 text-xl font-semibold group-hover:underline decoration-1 group-hover:text-primary">
          {title}
        </h4>
        <p className="text-sm text-muted-foreground">{description}</p>
        <ul className="not-prose flex flex-wrap gap-1 mt-2 list-none p-0 m-0">
          {tags.map((tag) => (
            <li className="text-sm text-black dark:text-white" key={tag}>
              #{tag.toLowerCase()}
            </li>
          ))}
        </ul>
      </a>
    </div>
  );
}
