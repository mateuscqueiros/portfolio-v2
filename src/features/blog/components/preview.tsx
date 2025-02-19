import { Link } from "react-router";
import dayjs from "dayjs";
import { BlogArticleType } from "../blog.types";
import { ArticleTag } from "../../../components/article-tag";

export function BlogArticlePreview({ article }: { article: BlogArticleType }) {
  return (
    <div className="w-full flex flex-col not-prose max-w-full">
      <Link className="group w-fit" to={`/blog/${article.id}`}>
        <div className="w-full flex flex-col justify-start">
          <h2 className="text-xl font-bold group-hover:text-primary group-hover:underline decoration-1">
            {article.title}
          </h2>
          <div className="text-muted-foreground flex items-center gap-1">
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
            <p className="mt-2">{article.shortDescription}</p>
          )}
        </div>
      </Link>
    </div>
  );
}
