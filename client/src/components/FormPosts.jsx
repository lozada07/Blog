import { ButtonBack, Error } from "./ui";

const FormPosts = ({ error, onSubmit }) => {
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
                size="small"
                value={
                  loading ? (
                    <div className="flex items-center space-x-2 justify-center">
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

export default FormPosts;
