export type ArticleResults = {
  abstract: string;
  byline: string;
  title: string;
  id: string;
  url: string;
  section: string;
  media: any;
  published_date: string;
};

export type ArticleResponse = {
  copyright: string;
  status: string;
  num_results: number;
  results: ArticleResults[];
};
