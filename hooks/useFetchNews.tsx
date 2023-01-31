"use client";

import axios from "axios";
import { useState } from "react";
import { API_KEY, EVERYTHING_URL, TOP_HEADLINES } from "../constants";

const useFetchNews = () => {
  const [allNews, setAllNews] = useState<NewsResponse | null>();
  const [newsByCategory, setNewsByCategory] = useState<NewsResponse | null>();
  const [mainPageNews, setMainPageNews] = useState<NewsResponse | null>();

  const getEverythingAbout = async (query: string) => {
    try {
      const { data } = await axios.get(
        `${EVERYTHING_URL}?language=en&search=${query}&api_token=${API_KEY}`
      );
      setAllNews(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getByCategory = async (category: string | Category) => {
    try {
      const { data } = await axios.get(
        `${TOP_HEADLINES}?language=en&categories=${category}&api_token=${API_KEY}`
      );
      setNewsByCategory(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMainPageNews = async () => {
    try {
      const { data } = await axios.get(
        `${TOP_HEADLINES}?language=en&api_token=${API_KEY}`
      );
      setMainPageNews(data);
    } catch (error) {
      console.log(error);
    }
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
