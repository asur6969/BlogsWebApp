import type { FC } from "react";
// import type { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import { NumbersOnly } from "../../helper/NumberOnly";

export interface NumberInputProps {
  name: string;
  placeholder: string;
  register: ReturnType<typeof useForm>["register"];
  label?: string;
  value?: number;
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  step?: number;
  error?: string | null;
}

export const NumberInput: FC<NumberInputProps> = ({
  placeholder,
  label,
  required,
  register,
  name,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
  minLength,
  maxLength,
  step,
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
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          NumbersOnly(e, step)
        }
        min={min}
        max={Number(max || Number.POSITIVE_INFINITY)}
        minLength={minLength}
        maxLength={maxLength}
        {...register(name, {
          required: {
            value: required || false,
            message: `${name} is required`,
          },
          min: {
            value: min,
            message: `cannot be less than ${min}`,
          },
          max: {
            value: max,
            message: `cannot be greater than ${max}`,
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
