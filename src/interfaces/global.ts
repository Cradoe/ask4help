import { AxiosResponse } from "axios";

export interface ApiError extends Error {
  message: string;
  errors?: object;
}

export interface ServiceResponse {
  message: string;
  status: number;
  success: boolean;
  data?: any;
}

export interface APIResponse extends AxiosResponse {
  message?: string;
  success?: boolean;
  data: any;
  token?: string;
}

export interface HowItWorkStep {
  icon: string;
  title: string;
  description: string;
}
export interface HowItWorks {
  student: HowItWorkStep[];
  advisor: HowItWorkStep[];
}
