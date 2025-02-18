import { Link } from "react-router";

export type ArticleTagProps = {
  tag: string;
  noLink?: boolean;
};

export function ArticleTag({ tag, noLink = false }: ArticleTagProps) {
  return noLink ? (
    <span className="mr-2">#{tag}</span>
  ) : (
    <Link to={`/blog?tags=${tag}`} key={tag} className="mr-2">
      #{tag}
    </Link>
  );
}
