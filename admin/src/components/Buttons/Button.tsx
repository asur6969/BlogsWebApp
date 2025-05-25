import type { FC } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setInfo } from "../../slices/infoSlice/infoSlice";

export interface ButtonProps {
  type: "button" | "submit" | "reset";
  label: string;
  loading?: boolean;
  error?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  type = "button",
  label,
  loading,
  disabled,
  error,
  onClick,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col justify-center items-start mx-2 my-4">
      {error && (
        <span className="text-red-500 text-sm m-1 font-serif">{error}</span>
      )}
      <button
        type={type}
        disabled={disabled || loading}
        onClick={onClick}
        onMouseEnter={() => dispatch(setInfo("Login Button"))}
        onMouseLeave={() => dispatch(setInfo(null))}
        className={`min-w-[40%] text-white font-bold py-2 px-4 rounded transition duration-100 ease-in-out text-nowrap
        ${
          disabled
            ? "opacity-50 cursor-not-allowed bg-gray-400"
            : "bg-blue-500 hover:bg-blue-700 cursor-pointer hover:shadow-lg"
        }`}
      >
        {loading ? <div className="spinner" /> : label}
      </button>
    </div>
  );
};
