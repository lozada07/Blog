import React from "react";
import { Controller } from "react-hook-form";
import JoditEditor from "jodit-react";
import ErrorZod from "./ErrorZod";

const TextArea = ({ control, name, error }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <JoditEditor
            value={value}
            tabIndex={1}
            onChange={(newContent) => {
              onChange(newContent); // pasa el nuevo contenido del editor
            }}
            className="mt-2 input p-0"
          />
        )}
      />
      {error[name] && <ErrorZod message={error[name].message} />}
    </>
  );
};

export default TextArea;
