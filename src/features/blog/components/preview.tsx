import { Link } from "react-router";
import dayjs from "dayjs";
import { BlogArticleType } from "../blog.types";
import { ArticleTag } from "../../../components/article-tag";

export function BlogArticlePreview({ article }: { article: BlogArticleType }) {
  return (
    <div className="w-full flex flex-col">
      <Link
        className="display-inline w-fit font-semibold text-link"
        to={`/blog/${article.id}`}
      >
        <div className="w-full flex flex-col justify-start">
          <h2 className="text-2xl font-bold text-gray-100">{article.title}</h2>
          <div className="text-muted-foreground flex items-center gap-1 mt-1">
            <span className="text-sm">
              {dayjs(article.createdAt).format("DD/MM/YYYY")}
            </span>
            <span>•</span>
            <span className="text-sm">
              {article.tags.length > 0 &&
                article.tags.map((tag) => (
                  <ArticleTag key={tag} tag={tag} noLink />
                ))}
            </span>
          </div>
          {article.shortDescription && (
            <p className="mt-2 text-gray-300">{article.shortDescription}</p>
          )}
        </div>
      </Link>
    </div>
  );
}
