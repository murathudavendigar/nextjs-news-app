export const categories: Category[] = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "tech",
];

//! NEWS API URLS

const BASE_URL = "https://api.thenewsapi.com/v1";
export const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export const EVERYTHING_URL = `${BASE_URL}/news/all`;
export const TOP_HEADLINES = `${BASE_URL}/news/top`;
