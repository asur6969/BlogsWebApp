import { useState } from "react";
import toast from "react-hot-toast";
import Axios from "../api/AxiosInstance";
import type { LoginFormat } from "../pages/LoginPage";
import { getErrorStatusText, getErrorsObject } from "../utils/handleAxiosError";
import { useNavigate } from "react-router-dom";

export interface LoginErrors {
  error?: string;
  username?: string;
  password?: string;
}

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<LoginErrors | null>(null);
  const navigate = useNavigate();

  const login = async (loginCredentials: LoginFormat) => {
    setLoading(true);
    setErrors(null);

    try {
      const response = await Axios.post(
        "/api/v1/admin/auth/login",
        loginCredentials,
      );

      console.log("login api response >", response);
      if (response.status === 200) {
        localStorage.setItem("username", response.data?.username);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error) {
        const err = getErrorsObject(error);
        setErrors(err);
        throw new Error(); // to trigger react-hot-toast
      }

      const errorMessage = getErrorStatusText(error);
      toast.error(errorMessage);
      setErrors({ error: errorMessage });
      throw new Error();
    } finally {
      setLoading(false);
    }
  };

  return { loading, errors, login };
};
