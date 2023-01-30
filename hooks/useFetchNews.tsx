"use client";

import axios from "axios";
import { useState } from "react";
import { API_KEY, EVERYTHING_URL, TOP_HEADLINES } from "../constants";

const useFetchNews = () => {
  const [allNews, setAllNews] = useState<NewsResponse | null>();
  const [newsByCategory, setNewsByCategory] = useState<NewsResponse | null>();
  const [mainPageNews, setMainPageNews] = useState<NewsResponse | null>();

  const getEverythingAbout = async (query: string) => {
    const { data } = await axios.get(
      `${EVERYTHING_URL}?language=en&search=${query}&limit=30&api_token=${API_KEY}`
    );

    setAllNews(data);
    console.log(data);
  };

  const getByCategory = async (category: string | Category) => {
    const { data } = await axios.get(
      `${TOP_HEADLINES}?language=en&categories=${category}&limit=30&api_token=${API_KEY}`
    );
    setNewsByCategory(data);
  };

  const getMainPageNews = async () => {
    const { data } = await axios.get(
      `${TOP_HEADLINES}?language=en&api_token=${API_KEY}`
    );
    setMainPageNews(data);
  };

  return {
    mainPageNews,
    allNews,
    newsByCategory,
    getEverythingAbout,
    getByCategory,
    getMainPageNews,
  };
};

export default useFetchNews;
