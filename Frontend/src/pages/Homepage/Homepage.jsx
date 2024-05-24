import styles from "./Homepage.module.scss";

export default function Homepage() {
  return (
    <div>
      <p className={`${styles.texte1}`}>All videos</p>
      <div className={`${styles.alignment} p-10`}>
        <p className={`${styles.videocard}`}>VIDEO</p>
        <p className={`${styles.textelogin}`}>
          Please login to add and like videos
        </p>
      </div>
    </div>
  );
}
