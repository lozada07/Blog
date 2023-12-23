import { motion } from "framer-motion";
import ErrorZod from "./ErrorZod";

const Input = ({ id, name, placeholder, type, register, error, value }) => {
  return (
    <div className="space-y-1 w-full ">
      <label htmlFor="email" className="label ">
        {name}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        defaultValue={value ? value : ""}
        className={`input ${error[id] && "border border-gray-900"}"`}
        {...register(id)}
      />
      {error[id] && <ErrorZod message={error[id].message} />}
    </div>
  );
};

export default Input;
