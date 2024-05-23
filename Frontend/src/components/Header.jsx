import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={`p-20 ${styles.header}`}>
      <a href="/" className={`${styles.logo}`}>
        Video Vine
      </a>
      <div>
        <a href="/register" className={`p-20 ${styles.headerbtn}`}>
          Register
        </a>
        <a href="/login" className={`p-20 ${styles.headerbtn}`}>
          Login
        </a>
      </div>
    </div>
  );
}
