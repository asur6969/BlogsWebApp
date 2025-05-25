import { useForm } from "react-hook-form";
import { TextInput } from "../components/Inputs/TextInput";
import { PasswordInput } from "../components/Inputs/PasswordInput";
import { Button } from "../components/Buttons/Button";
import { useLogin } from "../hooks/useAuth";
import toast from "react-hot-toast";

export interface LoginFormat {
  username: string;
  password: string;
}

export function LoginPage() {
  const { loading, errors: error, login } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    await toast.promise(login(data), {
      loading: <p>Loggin In ...</p>,
      success: <p className="text-green-500">LogIn Successfull.</p>,
      error: <p className="text-red-500">Login Failed.</p>,
    });
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Admin Username"
          required={true}
          register={register}
          name="username"
          placeholder="enter username..."
          error={
            (typeof errors.username?.message === "string"
              ? errors.username.message
              : null) || error?.username
          } // Display error message if exists
        />
        <PasswordInput
          label="Password"
          required={true}
          register={register}
          name="password"
          placeholder="enter password..."
          error={
            (typeof errors.password?.message === "string"
              ? errors.password.message
              : null) || error?.password
          } // Display error message if exists
        />
        {error?.error && (
          <span className="text-red-500 text-sm m-1 font-serif shake">
            {error.error}
          </span>
        )}
        <Button
          type="submit"
          label="login"
          loading={loading}
          disabled={loading}
        />
      </form>
    </div>
  );
}
