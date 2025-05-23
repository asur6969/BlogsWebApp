import { useForm } from "react-hook-form";
import { TextInput } from "../components/Inputs/TextInput";
import { PasswordInput } from "../components/Inputs/PasswordInput";
import { Button } from "../components/Buttons/Button";

export interface LoginFormat {
  username: string;
  password: string;
}

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log("data", data);
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
            typeof errors.username?.message === "string"
              ? errors.username.message
              : null
          } // Display error message if exists
        />
        <PasswordInput
          label="Password"
          required={true}
          register={register}
          name="password"
          placeholder="enter password..."
          error={
            typeof errors.password?.message === "string"
              ? errors.password.message
              : null
          } // Display error message if exists
        />
        <Button type="submit" label="login" />
      </form>
    </div>
  );
}
