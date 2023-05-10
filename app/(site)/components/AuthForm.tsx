"use client";
import React, { use, useCallback, useState } from "react";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import clsx from "clsx";
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

type variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<variant>("LOGIN");
  const [loading, setLoading] = useState<boolean>(false);
  const toggleVariant = useCallback(() => {
    setVariant((prev) => (prev === "LOGIN" ? "REGISTER" : "LOGIN"));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    if (variant === "REGISTER") {
      // REGISTER
    }
    if (variant === "LOGIN") {
      // LOGIN
    }
  };

  const socialAction = (action: string) => {
    setLoading(true);
    // NextAuth social login
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className=" bg-white px-4 py-8 shadow sm:rounded-lg  sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              label="Name"
              id="name"
              register={register}
              errors={errors}
              required
              disabled={loading}
            />
          )}
          <Input
            label="Email address"
            id="email"
            type="email"
            register={register}
            errors={errors}
            required
            disabled={loading}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            register={register}
            errors={errors}
            required
            disabled={loading}
          />
          <div>
            <Button disabled={loading} fullWidth={true} type="submit">
              {variant === "LOGIN" ? "Sign in" : "Register"}{" "}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative ">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-center">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          {variant === "LOGIN"
            ? "Don't have an account?"
            : "Already have an account?"}
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
