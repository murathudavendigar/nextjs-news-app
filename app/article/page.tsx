"use client";

import { notFound } from "next/navigation";
import LiveTimestamp from "../../components/LiveTimestamp";

type Props = {
  searchParams?: Article;
};

const ArticlePage = ({ searchParams }: Props) => {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: Article = searchParams;

  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {article.image_url && (
          <img
            src={article.image_url}
            alt={article.title}
            className="h-50 max-w-md mx-auto md_max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
          />
        )}
        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>

          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">By: {article.author || "unknown"}</h2>
            <h2 className="font-bold pl-4">Source: {article.source}</h2>
            <p className="pl-4">
              <LiveTimestamp time={article.published_at} />
            </p>
          </div>
          <p className="pt-4 mb-10">{article.description}</p>
          <a
            href={article.url}
            target="_blank"
            className="border-2 rounded-lg bg-[#195190FF] text-white text-lg p-5 font-semibold hover:bg-[#195190FF]/70 transition-all ">
            Go to source site...
          </a>
        </div>
      </section>
    </article>
  );
};

export default ArticlePage;
