import styles from "./Register.module.scss";
import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Register() {
  const [techFromApi, setTechFromApi] = useState([]);
  const schema = yup.object({
    username: yup.string().required("Le champ est obligatoire"),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,4}$/,
        "Email non valide"
      )
      .required("Le champ est obligatoire"),
    password: yup
      .string()
      .required("Le mot de passe est obligatoire")
      .min(5, "trop court")
      .max(10, "trop long"),
    confirmPassword: yup
      .string()
      .required("Vous devez confirmer votre mot de passe")
      .oneOf([yup.ref("password"), ""], "Les mots ne correspondent pas"),
    rgpd: yup
      .boolean()
      .oneOf([true], "Vous devez accepter les termes et les conditions"),
  });

  const defaultValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    rgpd: false,
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  async function submit(values) {
    console.log(values);
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        const newUser = await response.json();
        console.log(newUser);
        setTechFromApi(newUser.technos);
        reset(defaultValues);
      }
    } catch (error) {
      console.error(error);
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
              type="text"
              id="username"
              className="mb-10"
            />
            {errors.username && (
              <p className="text-error">{errors.username.message}</p>
            )}
          </div>
          <div className="d-flex flex-column mb-10">
            <label htmlFor="email" className="mb-10">
              Email
            </label>
            <input
              {...register("username")}
              type="email"
              id="email"
              className="mb-10"
            />
            {errors.email && (
              <p className="text-error">{errors.email.message}</p>
            )}
          </div>
          <div className="d-flex flex-column mb-10">
            <label htmlFor="password" className="mb-10">
              Mot de passe
            </label>
            <input
              {...register("username")}
              type="password"
              id="password"
              className="mb-10"
            />
            {errors.password && (
              <p className="text-error">{errors.password.message}</p>
            )}
          </div>
          <div className="d-flex flex-column mb-10">
            <label htmlFor="confirmPassword" className="mb-10">
              Confirmation de mot de passe
            </label>
            <input
              {...register("username")}
              type="password"
              id="confirmPassword"
              className="mb-10"
            />
            {errors.confirmPassword && (
              <p className="text-error">{errors.confirmPassword.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="genre">
              <input
                {...register("username")}
                type="checkbox"
                className="mr-15"
                id="femme"
              />
              Femme
              <input
                {...register("username")}
                type="checkbox"
                className="mr-15"
                id="homme"
              />
              Homme
            </label>
          </div>
          <div className="">
            <label htmlFor="rgpd" className="mb-10">
              <input
                {...register("username")}
                type="checkbox"
                className="mr-15"
                id="rgpd"
              />
              En soumettant ce formulaire j'accepte ...
            </label>
            {errors.rgpd && <p className="text-error">{errors.rgpd.message}</p>}
          </div>
          <button className="btn btn-primary mt-20">Submit</button>
        </form>
      </div>
    </div>
  );
}
