import { fetcher } from "../../../lib/api-client";
import { markdownDefaults } from "../lib/markdown-defaults";

export const getArticle = async (id: string) => {
  return await import(`../../../assets/articles/${id}.md` as any).then(async (res) => {
    return fetcher(res.default)
      .then((response: any) => {
        return {
          success: true,
          data: response.data,
        };
      })
      .catch((error: any) => ({
        success: false,
        message: "Erro ao carregar o arquivo",
        error,
      }));
  })
};

export async function getAllArticles() {
  // @ts-ignore
  const modules = import.meta.glob("/src/assets/articles/*.md", { query: "raw", import: "default" });
  const filePromises = Object.entries(modules).map(async ([path, resolver]: any) => {
    const content = await resolver();
    return { file: path.replace(markdownDefaults.directory, ""), content };
  });

  const filesContent = await Promise.all(filePromises);
  return filesContent
}

