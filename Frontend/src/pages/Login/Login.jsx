import styles from "./Login.module.scss";

export default function Login() {
  return (
    <div className={`${styles.center} mt-30`}>
      <div className={`${styles.content}`}>
        <form>
          <div className="d-flex flex-column mb-10">
            <label htmlFor="email" className="mb-10">
              Email
            </label>
            <input type="email" id="email" className="mb-10" />
          </div>
          <div className="d-flex flex-column mb-10">
            <label htmlFor="password" className="mb-10">
              Mot de passe
            </label>
            <input type="password" id="password" className="mb-10" />
          </div>
          <button className="btn btn-primary mt-20">Submit</button>
          <a href="/" className={`${styles.mdp} m-20`}>
            Mot de passe oublié
          </a>
        </form>
      </div>
    </div>
  );
}
