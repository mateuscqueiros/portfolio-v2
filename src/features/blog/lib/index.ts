import { BlogArticleType } from "../blog.types";
import { markdownDefaults } from "./markdown-defaults";

export function getArticle(article: string): BlogArticleType {

  const headers = article.split(markdownDefaults.headersSplitter)[1];

  const fileHeaders = headers.split("\n").reduce(
    (acc, i) => {
      const [key, value] = i.split(": ");
      return key.length > 0
        ? Object.assign(acc, { [key]: value.trim() })
        : acc;
    },
    {} as { [key: string]: string },
  )

  return { ...fileHeaders, tags: fileHeaders.tags.split(",").map((s) => s.trim()), content: article.split("---")[2] } as BlogArticleType
}

export function getFileName(filePath: string): string {
  return filePath.split("/").pop()?.replace(/\.[^/.]+$/, "") || "";
}

