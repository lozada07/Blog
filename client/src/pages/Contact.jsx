import { useForm } from "react-hook-form";
import { Input } from "../components/ui";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef();
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    emailjs
      .sendForm(
        "service_yaag415",
        "template_k7pgnye",
        form.current,
        "0UsPA2ZADRnmZlm2R"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent");
          navigate("/");
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  });

  return (
    <div className="w-full max-w-lg mx-auto mt-20">
      <form
        ref={form}
        className="bg-white  rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmit}
      >
        <div className="mb-4">
          <label className="text-sm">Name</label>
          <input type="text" name="name" className="input" placeholder=" Your name" />
        </div>
        <div className="mb-6">
          <label className="text-sm">Email</label>
          <input type="email" name="email" className="input" placeholder="Your Email" />
        </div>
        <div className="mb-6">
          <label className="block  text-sm font-medium mb-2" htmlFor="message">
            Mensaje
          </label>
          <textarea
            className="shadow-md text-sm appearance-none border rounded w-full p-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
            rows="4"
            {...register("message")}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-primary hover:bg-green-700 text-white  py-2 px-3 rounded-md focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
