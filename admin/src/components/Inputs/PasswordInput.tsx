import { useState, type FC } from "react";
import type { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export interface PasswordInputProps {
  placeholder: string;
  label: string;
  value?: string;
  required?: boolean;
  name: string;
  register: ReturnType<typeof useForm>["register"]; // Register function from react-hook-form
  error?: string | null; // Error message to display
}

export const PasswordInput: FC<PasswordInputProps> = ({
  placeholder,
  label,
  name,
  register,
  required,
  error,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className=" flex flex-col justify-center items-start text-black m-2 text-nowrap">
      <label className="font-medium font-serif">
        {label} {required && <span className="text-red-500 font-bold">*</span>}
      </label>
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...register(name, {
            required: {
              value: required || false,
              message: `${name} is required`,
            },
          })}
          className={`border-2 rounded-md p-2 pr-9 w-full h-10 text-black my-0.5 font-mono 
      ${error ? "border-red-500" : "border-gray-300"}`}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
        >
          {showPassword ? (
            <FaRegEye className="text-gray-300" />
          ) : (
            <FaRegEyeSlash className="text-gray-300" />
          )}
        </button>
      </div>

      {error && (
        <span className="text-red-500 text-sm m-1 font-serif">{error}</span>
      )}
    </div>
  );
};
