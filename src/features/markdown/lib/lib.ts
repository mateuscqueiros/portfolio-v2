import { mardownDefaults } from "./defaults";

export function getArticleHeaders(article: string) {

  const headers = article.split(mardownDefaults.headersSplitter)[1];

  return headers.split("\n").reduce(
    (acc, i) => {
      const [key, value] = i.split(": ");
      return key.length > 0
        ? Object.assign(acc, { [key]: value.trim() })
        : acc;
    },
    {} as { [key: string]: string },
  )
}
