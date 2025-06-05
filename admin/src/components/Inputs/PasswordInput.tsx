import { useRef, useState, type FC, type KeyboardEvent } from "react";
import type { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch } from "react-redux";
import { setInfo } from "../../slices/infoSlice/infoSlice";

export interface PasswordInputProps {
  placeholder: string;
  label: string;
  value?: string;
  required?: boolean;
  name: string;
  minLength?: number;
  maxLength?: number;
  register: ReturnType<typeof useForm>["register"]; // Register function from react-hook-form
  error?: string | null; // Error message to display
}

export const PasswordInput: FC<PasswordInputProps> = ({
  placeholder,
  label,
  name,
  register,
  required,
  minLength,
  maxLength,
  error,
}) => {
  const keysPressed = useRef<Record<string, boolean>>({});

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useDispatch();

  // trigger's when a key is pressed in password input field.
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    keysPressed.current[e.key.toLowerCase()] = true;

    if (keysPressed.current["control"] && keysPressed.current[" "]) {
      e.preventDefault();
      setShowPassword((prev) => !prev);
    }
  };

  // trigger's when a key is pressed in password input field.
  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>): void => {
    keysPressed.current[e.key.toLowerCase()] = false;
  };

  return (
    <div className=" flex flex-col justify-center items-start text-black m-2 text-nowrap">
      <label className="font-medium font-serif">
        {label} {required && <span className="text-red-500 font-bold">*</span>}
      </label>
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
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
            <Eye
              className="text-gray-300 cursor-pointer"
              strokeWidth={2}
              size={22}
              onMouseEnter={() =>
                dispatch(setInfo("Show/Hide Password (Ctrl+Space)"))
              }
              onMouseLeave={() => dispatch(setInfo(null))}
            />
          ) : (
            <EyeOff
              className="text-gray-300 cursor-pointer"
              strokeWidth={2}
              size={22}
              onMouseEnter={() =>
                dispatch(setInfo("Show/Hide Password (Ctrl+Space)"))
              }
              onMouseLeave={() => dispatch(setInfo(null))}
            />
          )}
        </button>
      </div>

      {error && (
        <span className="text-red-500 text-sm m-1 font-serif shake">
          {error}
        </span>
      )}
    </div>
  );
};
