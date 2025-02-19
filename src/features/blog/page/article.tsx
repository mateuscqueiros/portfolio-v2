import dayjs from "dayjs";
import { use } from "react";
import { useParams } from "react-router";
import { ApiResponse } from "../../../lib/api-client";
import { getArticle } from "../api";
import { LoadingSupense } from "../../../components/loading";
import { getArticle as getArticleInfo } from "../lib";
import { ArticleTag } from "../../../components/article-tag";
import { BlogArticleContent } from "../components/article-content";

// import "../../../styles/post.css";

export function BlogArticlePage() {
  const { id } = useParams();

  if (!id) return <h1>Nenhum id</h1>;

  return (
    <>
      <LoadingSupense message={"Carregando artigo..."}>
        <BlogArticle getArticle={getArticle(id)} />
      </LoadingSupense>
    </>
  );
}

export function BlogArticle({ getArticle }: { getArticle: any }) {
  const { id } = useParams();

  const result = use<ApiResponse<string>>(getArticle);

  if (
    !result.success ||
    !result.data ||
    result.data.startsWith("<!doctype html>")
  )
    return (
      <h1 className="mt-10 text-black dark:text-white">
        Não foi encontrado nenhum artigo com o ID <i>{id}</i>
      </h1>
    );

  const article = getArticleInfo(result.data);

  return (
    <>
      <div>
        <header className="max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl dark:text-white font-semibold mb-2 md:mb-4">
            {article.title}
          </h1>
          <div className="flex flex-row flex-wrap gap-y-2 gap-x-4 justify-between items-center text-sm text-muted-foreground">
            <div>
              <span className="">Publicado em </span>
              <time data-time={article.createdAt}>
                {dayjs(article.createdAt).format("DD/MM/YYYY")}
              </time>
            </div>

            <div>
              {article.tags.length > 0 &&
                article.tags.map((tag) => <ArticleTag key={tag} tag={tag} />)}
            </div>
          </div>
        </header>

        {article.banner && (
          <img
            className="w-full max-w-4xl mx-auto my-6"
            src={article.banner}
            alt=""
          />
        )}

        <BlogArticleContent content={article.content} />
      </div>
    </>
  );
}
