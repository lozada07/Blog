import React, { useEffect } from "react";
import { Button } from "./ui";
import { useForm } from "react-hook-form";
import Input from "./ui/Input";

const Form = ({ variant }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setFocus,
  } = useForm();

  return (
    <form action="" onSubmit={onSubmit}>
      <div className="space-y-6">
        <Input
          name="email"
          placeholder="example@example.com"
          type="email"
          register={register}
          error={errors}
        />
        <Input
          name="password"
          placeholder="*********"
          type="password"
          register={register}
          error={errors}
        />

        {variant === "register" && (
          <Input
            name="confirm-password"
            placeholder="*********"
            type="password"
            register={register}
            error={errors}
          />
        )}
        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
        <Button value={variant === "register" ? "Sign up" : "Login"} />
      </div>
    </form>
  );
};

export default Form;
