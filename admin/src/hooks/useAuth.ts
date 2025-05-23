import { useState } from "react";
import toast from "react-hot-toast";
import Axios from "../api/AxiosInstance";
import type { LoginFormat } from "../pages/LoginPage";
import { getErrorMessage } from "../utils/handleAxiosError";

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string | null>(null);

  const login = async (loginCredentials: LoginFormat) => {
    setLoading(true);
    setErrors(null);

    try {
      const response = await Axios.post("/auth", loginCredentials);

      console.log("login api response >", response);
    } catch (error) {
      const errorMessage = getErrorMessage(error);

      toast.error(errorMessage);
      setErrors(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { loading, errors, login };
};
