import type { FC } from "react";
// import type { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";

export interface TextInputProps {
  placeholder: string;
  label: string;
  value?: string;
  required?: boolean;
  name: string;
  register: ReturnType<typeof useForm>["register"];
  error?: string | null;
}

export const TextInput: FC<TextInputProps> = ({
  placeholder,
  label,
  required,
  register,
  name,
  error,
}) => {
  return (
    <div className=" flex flex-col justify-center items-start text-black m-2 text-nowrap">
      <label className="font-medium font-serif">
        {label} {required && <span className="text-red-500 font-bold">*</span>}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        {...register(name, {
          required: {
            value: required || false,
            message: `${name} is required`,
          },
        })} // Register the input with react-hook-form
        className={`border-2 rounded-md p-2 w-full h-10 text-black my-0.5 font-mono
            ${error ? "border-red-500" : "border-gray-300"}`}
      />
      {error && (
        <span className="text-red-500 text-sm m-1 font-serif">{error}</span>
      )}
    </div>
  );
};
