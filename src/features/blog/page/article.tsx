import hljs from "highlight.js";
import dayjs from "dayjs";
import Markdown from "react-markdown";
import { use, useEffect } from "react";
import { Link, useParams } from "react-router";
import { ApiResponse } from "../../../lib/api-client";
import { getArticle } from "../api";
import { BlogHeader } from "../components/header";
import { BlogPageLayout } from "../components/layout";
import { LoadingSupense } from "../../../components/loading";

import "../../../styles/post.css";
import { getArticleHeaders } from "../lib";

export function BlogArticlePage() {
  const { id } = useParams();

  if (!id) return <h1>Nenhum id</h1>;

  return (
    <>
      <LoadingSupense message={"Carregando artigo..."}>
        <BlogArticle articlePromise={getArticle(id)} />
      </LoadingSupense>
    </>
  );
}

export function BlogArticle({ articlePromise }: { articlePromise: any }) {
  const { id } = useParams();

  const result = use<ApiResponse<string>>(articlePromise);

  console.log(result);

  if (!result.success || result.data.startsWith("<!doctype html>"))
    return (
      <h1 className="mt-10">
        Não foi encontrado nenhum artigo com o ID <i>{id}</i>
      </h1>
    );

  const headers = getArticleHeaders(result.data);
  const data = result.data.split("---")[2];

  console.log(headers);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <div className="mt-10">
        <header className="max-w-3xl mx-auto mb-8">
          <h1 className="text-2xl font-bold mb-2">{headers.title}</h1>
          <div className="text-sm text-gray-500">
            <span>Publicado em </span>
            <time data-time={headers.createdAt}>
              {dayjs(headers.createdAt).format("DD/M/YYYY")}
            </time>
          </div>
        </header>

        {headers.banner && (
          <img
            className="w-full max-w-4xl mx-auto my-6"
            src={headers.banner}
            alt=""
          />
        )}

        <article className="max-w-3xl mx-auto">
          <Markdown className="post">{data}</Markdown>
        </article>
      </div>
      <footer className="footer max-w-3xl mx-auto px-6">
        <hr />
        <div className="my-6">
          <i>
            Tags:{" "}
            {headers.tags
              .split(",")
              .map((s) => s.trim())
              .map((tag: string) => (
                <Link
                  className="ml-2 text-link"
                  key={tag}
                  to={`/blog?tags=${tag}`}
                >
                  {tag}
                </Link>
              ))}
          </i>
        </div>
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
