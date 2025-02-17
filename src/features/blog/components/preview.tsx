import { Link } from "react-router";
import dayjs from "dayjs";
import { BlogArticleHeadersType } from "../blog.types";

export function BlogArticlePreview({
  article,
}: {
  article: BlogArticleHeadersType;
}) {
  return (
    <div className="w-full flex flex-col items-center my-10 ">
      <div className="w-full flex flex-col justify-start">
        <span className="text-gray-700 dark:text-gray-400 text-sm">
          {dayjs(article.createdAt).format("DD/M/YYYY")}
        </span>
        <h2>
          <Link
            className="display-inline w-fit text-xl font-semibold text-link"
            to={`/blog/${article.id}`}
          >
            {article.title}
          </Link>
        </h2>
      </div>
    </div>
  );
}
