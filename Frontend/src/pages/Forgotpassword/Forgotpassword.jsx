import styles from "./Forgotpassword.module.scss";

export default function Forgotpassword() {
  return (
    <div className={`${styles.center} mt-30`}>
      <div className={`${styles.content}`}>
        <form>
          <div className="d-flex flex-column mb-10">
            <label htmlFor="username" className="mb-10">
              Pseudo
            </label>
            <input type="username" id="username" className="mb-10" />
          </div>
          <button className="btn btn-primary mt-20">Submit</button>
        </form>
      </div>
    </div>
  );
}
