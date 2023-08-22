import React from "react";
import { useForm } from "react-hook-form";
import Input from "../@shared/Input";
import dataInputSignup from "../staticData/dataInputSignup";
import ButtonSubmit from "../@shared/ButtonSubmit";
import TermsCheckbox from "../@shared/TermsCheckbox";
import toast, { Toaster } from "react-hot-toast";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = (data) => {
    // toast.loading('Loading...')
    if (data.confirmPassword !== data.password) {
      console.log("Erreur ici");
      toast.error("confirm password and password is different", {
        style: {
          background: "red", // Couleur de fond
          color: "white", // Couleur du texte
        },
      });
      return;
    }
    console.log(data);
  };
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} id="sign-up-form">
      <Toaster/>
      {dataInputSignup.map((field, index) => {
        return (
          <Input key={index} {...field} register={register} errors={errors} />
        );
      })}
      <TermsCheckbox
        fieldName="terms"
        linkUrl="/"
        register={register}
        errors={errors}
        linkText="conditions générales"
      />
      <ButtonSubmit isDisable={true} value="Valider inscription" />
    </form>
  );
}

export default SignUpForm;
