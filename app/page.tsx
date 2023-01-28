"use client";

//! COMPONENTS
import NewsList from "../components/NewsList";

//! HOOKS
import { useEffect } from "react";
import useFetchNews from "../hooks/useFetchNews";

const HomePage = () => {
  const { mainPageNews, getMainPageNews } = useFetchNews();

  useEffect(() => {
    getMainPageNews();
  }, []);

  return <div>{mainPageNews && <NewsList news={mainPageNews} />}</div>;
};

export default HomePage;
