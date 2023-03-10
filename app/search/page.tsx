"use client";

//! COMPONENTS
import NewsList from "../../components/NewsList";

//! HOOKS
import { useEffect } from "react";
import useFetchNews from "../../hooks/useFetchNews";

type Props = {
  searchParams?: { term: string };
};

const SearchPage = ({ searchParams }: Props) => {
  const { allNews, getEverythingAbout } = useFetchNews();
  console.log(searchParams);

  useEffect(() => {
    if (typeof searchParams?.term === "string") {
      getEverythingAbout(searchParams?.term);
    }
  }, []);

  return (
    <div>
      <h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>
      {allNews && <NewsList news={allNews} />}
    </div>
  );
};

export default SearchPage;
