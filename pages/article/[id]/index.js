import { useRouter } from "next/router";
import Link from "next/link";
import { server } from "../../../config";
import Meta from "../../../components/Meta";

const article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Back to Home</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async (context) => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);

  // console.log("ids: ", ids);

  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));
  //   console.log("paths", paths);

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);

//   //   console.log("ids: ", ids);

//   const paths = ids.map((id) => ({
//     params: { id: id.toString() },
//   }));
//   //   console.log("paths", paths);

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default article;
