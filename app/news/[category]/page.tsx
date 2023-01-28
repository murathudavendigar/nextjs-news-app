"use client";

//! COMPONENTS
import NewsList from "../../../components/NewsList";

//! CONSTANTS
// import { categories } from "../../../constants";

//! HOOKS
import { useEffect } from "react";
import useFetchNews from "../../../hooks/useFetchNews";

type Props = {
  params: { category: string };
};

const NewsCategoryPage = ({ params: { category } }: Props) => {
  const { newsByCategory, getByCategory } = useFetchNews();
  useEffect(() => {
    getByCategory(category);
  }, []);

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      {newsByCategory && <NewsList news={newsByCategory} />}
    </div>
  );
};

export default NewsCategoryPage;
