type NewsResponse = {
  data: Article[];
};

type Article = {
  source: string;
  author: string | null;
  title: string;
  description: string;
  url: string;
  image_url: string | null;
  published_at: string;
  snippet: string;
};

type Category =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "tech";
