import { useSearchParams } from "react-router";
import { BlogArticlePreview } from "../components/preview";
import { LoadingSupense } from "../../../components/loading";
import { use } from "react";
import { getAllArticles } from "../api";
import { BlogArticleType, BlogSourceType } from "../blog.types";
import { getArticle } from "../lib";
import { ArticleTag } from "../../../components/article-tag";
import dayjs from "dayjs";

export function BlogHomePage() {
  return (
    <>
      <LoadingSupense message={"Carregando..."}>
        <BlogHome articlesPromise={getAllArticles()} />
      </LoadingSupense>
    </>
  );
}

export function BlogHome({ articlesPromise }: { articlesPromise: any }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const result = use<BlogSourceType[]>(articlesPromise);

  if (result.length === 0)
    return <h1 className="mt-10">Não foi possível carregar os artigos</h1>;

  const articles: BlogArticleType[] = result.map((article) =>
    getArticle(article.content),
  );

  const filterTags: string[] =
    searchParams
      .get("tags")
      ?.split(",")
      .map((t) => t.toLowerCase()) || [];

  const filteredArticles =
    filterTags.length > 0
      ? articles.filter((a) =>
          a.tags.map((t) => filterTags.includes(t)).includes(true),
        )
      : articles;

  const sortedArticles = filteredArticles.sort((a, b) =>
    dayjs(b.createdAt).isAfter(a.createdAt) ? 1 : -1,
  );

  return (
    <div className="max-w-4xl w-full mx-auto">
      <h1 className="!mt-0 !mb-2">Notes</h1>
      <p>
        Some thoughts about programming in general. Also refer to{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mateuscqueiros/recent-activity/all/"
        >
          my Linkedin
        </a>{" "}
        for updates.
      </p>
      <hr className="!my-8" />
      {filterTags.length > 0 && (
        <div
          className="w-full flex justify-center text-muted-foreground cursor-pointer hover:underline mb-8"
          onClick={() => {
            setSearchParams(undefined);
          }}
        >
          <span>Filtrando resultados para:</span>
          {filterTags.map((tag) => (
            <ArticleTag key={tag} tag={tag} />
          ))}
        </div>
      )}
      <div className="flex flex-col items-center w-full space-y-12 pb-12">
        {articles &&
          sortedArticles.map((article) => (
            <BlogArticlePreview article={article} key={article.id} />
          ))}
      </div>
    </div>
  );
}
