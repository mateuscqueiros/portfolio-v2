import { fetcher } from "../../../lib/api-client";
import { markdownDefaults } from "../lib/markdown-defaults";

export const getArticle = async (id: string) => {
  return await import(`../../../assets/articles/${id}.md` as any).then(async (res) => {
    console.log(res.default)
    return fetcher(res.default)
      .then((response) => {
        return {
          success: true,
          data: response.data,
        };
      })
      .catch((error) => ({
        success: false,
        message: "Erro ao carregar o arquivo",
        error,
      }));
  })
};

export async function getAllArticles() {
  const modules = import.meta.glob("/src/assets/articles/*.md", { as: "raw" });
  const filePromises = Object.entries(modules).map(async ([path, resolver]) => {
    const content = await resolver();
    return { file: path.replace(markdownDefaults.directory, ""), content };
  });

  const filesContent = await Promise.all(filePromises);
  return filesContent
}

