import styles from "../styles/Articles.module.css";
import Article from "./ArticleItem";
const ArticleList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;
