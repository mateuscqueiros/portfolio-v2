export type BlogArticleType = {
  id: string;
  author: string;
  content: string;
  createdAt: Date;
  lastUpdate: Date;
  tags: string[];
  title: string;
  banner: string;
  shortDescription: string;
};

export type BlogSourceType = {
  file: string;
  content: string;
};
