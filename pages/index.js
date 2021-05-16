import Head from "next/head";
import Articles from "../components/ArticleList";
import { server } from "../config";

export default function Home({ articles }) {
  // console.log("articles: ", articles);
  return (
    <div>
      <Articles articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
