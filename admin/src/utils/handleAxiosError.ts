import axios from "axios";

export const getErrorStatusText = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    return (
      // error.response?.data?.error ||
      // error.response?.data?.message ||
      // error.response?.statusText ||
      "Axios error occurred"
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "An unknown error occurred";
};

export const getErrorsObject = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.error;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "An unknown error occurred";
};
