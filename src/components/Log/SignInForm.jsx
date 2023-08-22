import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../action/login";
import { Navigate, redirect } from "react-router-dom";
import Input from "../@shared/Input";
import { handleTokenReceivedAndSave } from "../action/saveToken";
import dataInputLogin from "../staticData/dataInputLogin";
import ButtonSubmit from "../@shared/ButtonSubmit";
import { toast ,Toaster} from "react-hot-toast";

function SignInForm() {
  const [errorLogin, setErrorLogin] = useState(null);
  const [isOk, setIsOk] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = async (data) => {
    // toast.loading("loading...")
    const datas = await login(data);
    if (datas.errors) {
      setErrorLogin(datas.errors);
      toast.error(errorLogin, {
        style: {
          background: "red", // Couleur de fond
          color: "white", // Couleur du texte
        },
      })
    } else {
      setIsOk(true);
      handleTokenReceivedAndSave(datas.token);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="sign-up-form">
      <Toaster/>
      {dataInputLogin.map((field, index) => {
        return (
          <Input
            key={index}
            register={register}
            errors={errors}
            {...field}
          />
        );
      })}

      <ButtonSubmit isDisable={true} value="Connection" />
      <br />
      {isOk && <Navigate to="/" replace={true} />}
    </form>
  );
}

export default SignInForm;
