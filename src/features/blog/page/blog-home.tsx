import { Link } from "react-router";
import { BlogArticleHeadersType } from "../blog.types";
import { BlogHeader } from "../components/header";
import { BlogArticlePreview } from "../components/preview";

export function BlogHomePage({
  articles,
  tags,
}: {
  articles: BlogArticleHeadersType[];
  tags: string[];
}) {
  return (
    <>
      <BlogHeader />
      <main className="max-w-4xl mx-auto px-6">
        {tags.length > 0 && (
          <i>
            <span className="mr-2">Resultados para:</span>
            {tags.map((tag) => (
              <Link
                to={`/blog?tags=${tag}`}
                key="tag"
                className="mr-2 text-link"
              >
                {tag}
              </Link>
            ))}
          </i>
        )}
        {articles &&
          articles.map((article) => (
            <BlogArticlePreview article={article} key={article.id} />
          ))}
      </main>
    </>
  );
}
