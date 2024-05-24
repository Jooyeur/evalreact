import styles from "./Login.module.scss";
import { useContext, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "../../components/Modal/Modal";
import { signin } from "../../../apis/users";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  const [feedback, setFeedback] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { setConnectedUser } = useContext(UserContext);

  const schema = yup.object({
    username: yup.string().required("Required"),
    password: yup.string().required("Le mot de passe est obligatoire"),
  });

  const defaultValues = {
    username: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  async function submit(values) {
    try {
      const response = await signin(values);
      if (!response.message) {
        localStorage.setItem("user", JSON.stringify(response));
        setConnectedUser(response.user);
        setFeedback("Connexion réussie");
        reset(defaultValues);
        setShowModal(true);
      } else {
        setFeedback(response.message);
        setShowModal(true);
      }
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  }

  function handleCloseModal() {
    setShowModal(false);
    if (feedback === "Connexion réussie") {
      navigate("/");
    }
  }
  return (
    <div className={`${styles.center} mt-30`}>
      <div className={`${styles.content}`}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="d-flex flex-column mb-10">
            <label htmlFor="username" className="mb-10">
              Pseudo
            </label>
            <input
              {...register("username")}
              type="username"
              id="username"
              className="mb-10"
            />
          </div>
          <div className="d-flex flex-column mb-10">
            <label htmlFor="password" className="mb-10">
              Mot de passe
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              className="mb-10"
            />
          </div>
          <button className="btn btn-primary mt-20">Submit</button>
          <a href="/forgotpassword" className={`${styles.mdp} m-20`}>
            Mot de passe oublié
          </a>
        </form>
        {showModal && (
          <Modal onClose={handleCloseModal} feedback={feedback}>
            <button
              className="btn btn-reverse-primary"
              onClick={handleCloseModal}
            >
              X
            </button>
          </Modal>
        )}
      </div>
    </div>
  );
}
