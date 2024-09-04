"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input, Textarea } from "@nextui-org/react";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { MyInput } from "./MyInput";
import { MyTextarea } from "./MyTextarea";

type TFormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TFormData>();

  const onSubmit: SubmitHandler<TFormData> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="dark flex flex-col gap-4 mx-auto mt-4 items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <MyInput
        type="text"
        label="Name"
        isInvalid={!!errors.name}
        errorMessage={errors.name?.message}
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 2,
            message: "Name must be at least 2 characters"
          }
        })}
      />
      <MyInput
        type="email"
        label="Email"
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email address"
          }
        })}
      />
      <MyTextarea
        label="Message"
        placeholder="Your message here..."
        isInvalid={!!errors.message}
        errorMessage={errors.message?.message}
        {...register("message", {
          required: "Message is required",
          minLength: {
            value: 10,
            message: "Message must be at least 10 characters"
          }
        })}
      />
      <Button
        type="submit"
        variant="shadow"
        className="text-white bg-gray-900 inline-flex items-center h-12 rounded-xl gap-2 border border-gray-900 hover:bg-transparent hover:text-gray-900 transition-all duration-300 w-full"
      >
        <span className="font-semibold">Contact Me</span>
        <ArrowUpRightIcon className="size-4" />
      </Button>
    </form>
  );
};

export default ContactForm;
