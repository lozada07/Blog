import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import { Button, ButtonBack } from "../components/ui";
import { useForm } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";
import TextArea from "../components/ui/TextArea";
import { Controller } from "react-hook-form";
import { MdCancel } from "react-icons/md";
import useApiRequest from "../hooks/useApiRequest";
import { createPost } from "../services/post";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorZod from "../components/ui/ErrorZod";
import { categoriesPost } from "../constans/category";
import FileUploadButton from "../components/ui/FileUploadButton";
import { postSchema } from "../utils/schemas/postSchema";
import { toast } from "react-toastify";

const CreatePosts = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const { loading, error, makeRequest } = useApiRequest(createPost);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch,
    setValue,
    getValues,
  } = useForm({
    resolver: zodResolver(postSchema),
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    formData.set("category", JSON.stringify(data.category));
    formData.set("photo", data.photo[0]);

    const res = await makeRequest(formData);
    if (res) {
      toast.success("Post Created ");
      navigate("/");
      reset();
    }
  });

  const handleChangeCategory = (newCategory) => {
    if (
      newCategory &&
      !categories.includes(newCategory) &&
      categories.length < 3
    ) {
      setCategories([...categories, newCategory]);
    }
  };

  const removeCategory = (category) => {
    setCategories(categories.filter((c) => c !== category));
    if (categories.length === 1) {
      setValue("category", "");
    }
  };

  return (
    <div className="mt-0">
      <ButtonBack />
      <div className="max-w-3xl mx-auto bg-white p-5 rounded shadow-2xl ">
        <h1 className="h1 text-center mt-2 mb-14">Create Post</h1>
        {error && (
          <div className="mb-3">
            <Error error={error} />
          </div>
        )}
        <form onSubmit={onSubmit}>
          <div className="space-y-6">
            <div className="flex justify-between ">
              <div className="flex space-x-2 items-center">
                {categories.map((category) => (
                  <div
                    className="
                  inline-flex items-center p-2 px-3 rounded-full text-sm 
                  font-medium bg-green-100 text-green-800"
                    key={category}
                  >
                    {category}
                    <button
                      className="ml-2  "
                      onClick={() => removeCategory(category)}
                    >
                      <MdCancel size={18} />
                    </button>
                  </div>
                ))}
              </div>
              <div>
                <div className="relative mb-1 ">
                  <Controller
                    name="category"
                    control={control}
                    defaultValue={[]}
                    render={({ field }) => (
                      <>
                        <select
                          id="select"
                          value={
                            categories.length === 0 ? "Category" : field.value
                          }
                          className="border input w-52 appearance-none text-sm"
                          onChange={(e) => {
                            const category = e.target.value;
                            handleChangeCategory(category);
                            field.onChange(category);
                          }}
                        >
                          <option value="">Category</option>
                          {categoriesPost.map((category) => (
                            <option
                              value={category}
                              className="hover:bg-green-600 hover:text-white"
                              key={category}
                            >
                              {category}
                            </option>
                          ))}
                        </select>
                      </>
                    )}
                  />

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <IoIosArrowDown />
                  </div>
                </div>
                {errors["category"] && (
                  <ErrorZod message={errors["category"].message} />
                )}
              </div>
            </div>
            <FileUploadButton
              register={register}
              value={getValues("photo")}
              setValue={setValue}
              watch={watch("photo")}
            />
            {errors["photo"] && <ErrorZod message={errors["photo"].message} />}

            <Input
              id="title"
              name="Title"
              type="text"
              register={register}
              error={errors}
            />

            <div>
              <label htmlFor="label" className=" label">
                Description
              </label>
              <TextArea name="content" control={control} error={errors} />
            </div>

            <div className="flex space-x-1 justify-end items-center">
              <Link
                to="/"
                className="bg-red-700 py-2.5  px-2 text-sm font-medium text-white transitionButton rounded-md"
              >
                Cancel
              </Link>
              <Button
                type="submit"
                disabled={loading ? true : false}
                size="small"
                value={
                  loading ? (
                    <div className="flex items-center disabled:opacity-20 hover:cursor-not-allowed space-x-2 justify-center">
                      <Loading size="small" />
                    </div>
                  ) : (
                    "Publish"
                  )
                }
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePosts;
