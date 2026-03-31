import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosError, AxiosRequestConfig } from "axios";
import axiosInstance from "./axios";

type ErrorResponse = {
  message: string;
};

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      body?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    { status?: number; message: string }
  > =>
    async ({ url, method = "GET", body, params }) => {
      try {
        const result = await axiosInstance({
          url,
          method,
          data: body,
          params,
        });

        return { data: result.data };
      } catch (err) {
        const error = err as AxiosError<ErrorResponse>;
        const status = error.response?.status;
        const message = error.response?.data?.message ?? "Something went wrong";

        return {
          error: {
            status,
            message
          },
        };
      }
    };
