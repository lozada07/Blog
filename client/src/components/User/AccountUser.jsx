import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../../constans/animates.js";
import { useNavigate } from "react-router-dom";
import useApiRequest from "../../hooks/useApiRequest.jsx";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../ui/Button.jsx";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import Input from "../ui/Input.jsx";
import { useForm } from "react-hook-form";
import { updateUser } from "../../services/user.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import { updateUserSchema } from "../../utils/schemas/authSchema.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import Error from "../ui/Error.jsx";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../../config.js";
import avatar from "../../assets/dd.png";
import Loading from "../ui/Loading.jsx";

const AccountUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loading, makeRequest, error } = useApiRequest(updateUser);
  const navigate = useNavigate();
  const stopPropagation = (e) => e.stopPropagation();
  const [page, setPage] = useState(1);
  const { user, reloadPage } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    watch,
  } = useForm({
    defaultValues: {
      email: user.email,
      username: user.username,
    },
    resolver: zodResolver(updateUserSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();

    //Save data into formData
    for (const key in data) {
      formData.append(key, data[key]);
    }
    //Verify that exist avatar
    if (data.avatar.length > 0) {
      formData.set("avatar", data.avatar[0]);
    } else {
      formData.delete("avatar");
    }

    const res = await makeRequest(formData);
    if (res != undefined) {
      toast.success("User updated ");
      setTimeout(() => {
        reloadPage();
      }, 1000);
    }
  });

  const handleCloseModal = () => {
    setPage(1);
    reset();
    setIsOpen(!isOpen);
  };

  const handleBack = () => {
    setPage(1);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex space-x-2 px-4 w-full items-center py-2 text-sm text-gray-700 hover:text-gray-600 hover:bg-gray-100"
      >
        <MdOutlineAccountCircle size={24} />
        <span>Account</span>
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <div
            onClick={handleCloseModal}
            className="fixed flex inset-0 z-10 bg-black/20 backdrop-blur-[2px] justify-center  items-center"
          >
            <motion.div
              onClick={stopPropagation}
              variants={fadeIn("down", 0, 300)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 0.3 }}
              className=" relative bg-white w-[400px] h-[420px] sm:w-[390px] overflow-auto   rounded-lg"
            >
              <button
                onClick={handleCloseModal}
                className=" absolute right-3 top-3 group "
              >
                <AiOutlineClose
                  className="x text-neutral-400 transition group-hover:text-neutral-500"
                  size={24}
                />
              </button>
              {page != 1 && (
                <button
                  onClick={handleBack}
                  className="absolute left-3 top-3  group "
                >
                  <div className="flex items-center  transition translate-x-0 group-hover:-translate-x-2 duration-300">
                    <IoIosArrowBack size={20} className="text-neutral-600" />
                    <span className=" text-sm font-medium">Go Back</span>
                  </div>
                </button>
              )}

              <form action="" onSubmit={onSubmit}>
                <div className="px-4 py-8">
                  {page === 1 ? (
                    <div className="flex flex-col px-8 gap-10 items-center justify-center">
                      <div className="flex flex-col items-center space-y-3">
                        <div className="relative outline outline-2 outline-green-600 rounded-full">
                          <input
                            type="file"
                            id="fileInput"
                            className="hidden"
                            {...register("avatar")}
                            accept="image/jpeg, image/png, image/jpg"
                          />

                          <label htmlFor="fileInput" className="cursor-pointer">
                            <div className="absolute -right-0.5 bottom-2 bg-primary text-white p-0.5 rounded-full">
                              <MdEdit size={16} />
                            </div>

                            <img
                              src={
                                watch("avatar")?.length > 0
                                  ? URL.createObjectURL(watch("avatar")[0])
                                  : Object.keys(user.photo).length > 0
                                  ? user.photo.secure_url
                                  : avatar
                              }
                              className="
                              h-20
                              w-20
                              rounded-full
                              "
                            />
                          </label>
                        </div>

                        <h2 className="text-neutral-800 font-semibold text-xl ">
                          {user.username}
                        </h2>
                      </div>
                      <div className=" w-full rounded-md shadow-md drop-shadow-md  bg-white ">
                        <button
                          onClick={() => setPage(2)}
                          className="flex w-full items-center text-[15px] justify-between p-5 group "
                        >
                          <span>Update profile</span>
                          <IoIosArrowForward
                            size={20}
                            className="text-neutral-500 transition translate-x-0  group-hover:translate-x-3 duration-300"
                          />
                        </button>
                        <hr />
                        <button
                          onClick={() => setPage(3)}
                          className="flex w-full items-center text-[15px] justify-between p-5 group "
                        >
                          <span>Change password</span>
                          <IoIosArrowForward
                            size={20}
                            className="text-neutral-500 transition translate-x-0  group-hover:translate-x-3 duration-300"
                          />
                        </button>
                      </div>
                    </div>
                  ) : page === 2 ? (
                    <motion.div
                      onClick={stopPropagation}
                      variants={fadeIn("letf", 300)}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      transition={{ duration: 0.3 }}
                      className="bg-white h-[200px]"
                    >
                      <div className="flex flex-col px-8 gap-4 mt-12 justify-center items-center">
                        <h2 className="text-neutral-800 font-semibold text-xl ">
                          Update Profile
                        </h2>
                        <Input
                          id="email"
                          name="Email"
                          placeholder="example@example.com"
                          type="email"
                          register={register}
                          error={errors}
                        />
                        <Input
                          id="username"
                          name="Username"
                          placeholder="ddddd"
                          type="text"
                          register={register}
                          error={errors}
                        />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      onClick={stopPropagation}
                      variants={fadeIn("letf", 300)}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      transition={{ duration: 0.3 }}
                      className="bg-white h-[200px]"
                    >
                      <div className="flex flex-col px-8 gap-3 mt-8 justify-center items-center">
                        <h2 className="text-neutral-800 font-semibold text-xl ">
                          Change Password
                        </h2>
                        {error && <Error error={error} />}
                        <Input
                          id="password"
                          name="Current Password"
                          placeholder="**********"
                          type="password"
                          register={register}
                          error={errors}
                        />
                        <Input
                          id="newPassword"
                          name="New Password"
                          placeholder="**********"
                          type="password"
                          register={register}
                          error={errors}
                        />
                        <Input
                          id="confirmPassword"
                          name="Repeat Password"
                          placeholder="**********"
                          type="password"
                          register={register}
                          error={errors}
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="absolute flex justify-between items-center bottom-0 w-full p-3 shadow-2xl drop-shadow-md border-t border-gray-100 bg-white">
                  <button
                    onClick={handleCloseModal}
                    type="button"
                    className="bg-white p-2 border border-gray-400 rounded-md   text-neutral-800 hover:bg-slate-100 transition duration-300 "
                  >
                    Cancel
                  </button>
                  <Button
                    type="submit"
                    disabled={loading ? true : false}
                    size="small"
                    value={
                      loading ? (
                        <div className="flex items-center disabled:opacity-20 hover:cursor-not-allowed  justify-center">
                          <Loading size="small" />
                        </div>
                      ) : (
                        "Save"
                      )
                    }
                  />
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccountUser;
