export const categories: Category[] = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

//! NEWS API URLS

const BASE_URL = "https://newsapi.org/v2";
export const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export const EVERYTHING_URL = `${BASE_URL}/everything`;
export const TOP_HEADLINES = `${BASE_URL}/top-headlines`;
