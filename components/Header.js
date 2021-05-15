import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>HZRQ</span>ISHK
      </h1>
      <p className={styles.description}>This is a sample paragraph.</p>
    </div>
  );
};

export default Header;
