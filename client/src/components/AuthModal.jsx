import { useState, useEffect } from "react";
import { useAuthModal } from "../hooks";
import { Button } from "./ui";
import Modal from "./ui/Modal";
import { useForm } from "react-hook-form";
import Input from "./ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { login, signUp } from "../services/user";
import useApiRequest from "../hooks/useApiRequest";
import Loading from "./ui/Loading";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Error from "./ui/Error";

import {
  authLoginSchema,
  authRegisterSchema,
} from "../utils/schemas/authSchema";

const AuthModal = () => {
  const { isOpen, onClose, typeModal } = useAuthModal();
  const { isAuthenticated, saveUser } = useAuth();
  const [variant, setVariant] = useState(typeModal);
  const { makeRequest, loading, error } = useApiRequest(
    variant === "login" ? login : signUp
  );
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(
      variant === "login" ? authLoginSchema : authRegisterSchema
    ),
    mode: "onBlur",
  });

  const handleModal = () => {
    setVariant(variant === "register" ? "login" : "register");
  };

  const onSubmit = handleSubmit(async (datos) => {
    const res = await makeRequest(datos);
    if (res) {
      const { token, user } = res;
      saveUser(token, user);
      onClose();
      navigate("/");
    }
    reset();
  });

  useEffect(() => {
    if (isOpen) {
      setVariant(typeModal);
    }
  }, [isOpen]);

  const body = (
    <>
      {error && <Error error={error} />}
      <form action="" onSubmit={onSubmit}>
        <div className="space-y-6">
          <Input
            id="email"
            name="Email"
            placeholder="example@example.com"
            type="email"
            register={register}
            error={errors}
          />
          {variant === "register" && (
            <Input
              id="username"
              name="Username"
              placeholder="Jose Duarte"
              type="text"
              register={register}
              error={errors}
            />
          )}

          <Input
            id="password"
            name="Password"
            placeholder="*********"
            type="password"
            register={register}
            error={errors}
          />

          {variant === "register" && (
            <Input
              id="confirmPassword"
              name="Confirm Password"
              placeholder="*********"
              type="password"
              register={register}
              error={errors}
            />
          )}
          {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
          <Button
            type="submit"
            size="full"
            disabled={loading ? true : false}
            value={
              loading ? (
                <div className="flex items-center  hover:cursor-not-allowed space-x-2 justify-center">
                  <p>Cargando</p>
                  <Loading size="small" />
                </div>
              ) : variant === "register" ? (
                "Sign up"
              ) : (
                "Login"
              )
            }
          />
        </div>
      </form>
    </>
  );

  const footer = (
    <div className="text-center mt-3">
      <span className="text-sm text-neutral-600">
        {variant === "register"
          ? "Already has account?"
          : "Don't have an account?"}
      </span>
      <button
        onClick={handleModal}
        className="ml-2 text-sm text-primary font-semibold"
      >
        {variant === "register" ? "Login" : "Sign Up"}
      </button>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      title={variant === "register" ? "Sign up" : "Login"}
      body={body}
      footer={footer}
      onClose={onClose}
    />
  );
};

export default AuthModal;
