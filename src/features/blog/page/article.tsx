import hljs from "highlight.js";
import dayjs from "dayjs";
import Markdown from "react-markdown";
import { use, useEffect } from "react";
import { Link, useParams } from "react-router";
import { ApiResponse } from "../../../lib/api-client";
import { getArticle } from "../api";
import { LoadingSupense } from "../../../components/loading";
import { getArticle as getArticleInfo } from "../lib";

import "../../../styles/post.css";
import { ArticleTag } from "../../../components/article-tag";

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

  console.log(result);

  if (!result.success || result.data.startsWith("<!doctype html>"))
    return (
      <h1 className="mt-10">
        Não foi encontrado nenhum artigo com o ID <i>{id}</i>
      </h1>
    );

  const article = getArticleInfo(result.data);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <div className="mt-10">
        <header className="max-w-3xl mx-auto mb-8">
          <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
          <div className="flex flex-row justify-between items-center text-sm text-muted-foreground">
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

        <article className="max-w-3xl mx-auto">
          <Markdown className="post">{article.content}</Markdown>
        </article>
      </div>
      <footer className="flex justify-center footer max-w-3xl mx-auto text-xs w-full my-6">
        <>Copyright © 2025 Mateus Queirós</>
      </footer>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/atom-one-dark.min.css"
        media="screen and (prefers-color-scheme: dark)"
      />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/atom-one-light.min.css"
        media="screen and (prefers-color-scheme: light)"
      />
    </>
  );
}
