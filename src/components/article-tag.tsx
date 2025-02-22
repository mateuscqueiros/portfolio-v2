import { Link } from "react-router";

export type ArticleTagProps = {
  tag: string;
  noLink?: boolean;
};

export function ArticleTag({ tag, noLink = false }: ArticleTagProps) {
  return (
    <span className="not-prose mr-2">
      {noLink ? (
        <>#{tag}</>
      ) : (
        <Link to={`/notes?tags=${tag}`} key={tag}>
          #{tag}
        </Link>
      )}
    </span>
  );
}
