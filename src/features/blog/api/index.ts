import { ApiResponse, fetcher } from "../../../lib/api-client";

export const getArticle = async (id: string) => {
  return await fetcher<ApiResponse<string>>(`/article/${id}.md`)
    .then((response) => {
      return {
        success: true,
        data: response.data,
      };
    })
    .catch((error) => ({
      success: false,
      message: "Erro ao carregar o arquivo:",
      error,
    }));
};
