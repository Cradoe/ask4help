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
  statusCode: number;
  message?: string;
  success?: boolean;
  data: any;
  accessToken?: string;
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

export interface HeaderMenu {
  title: string;
  path: string;
}

export interface SettingsMenuGRoup {
  title: string;
  items: SettingsMenuItem[];
}

export interface SettingsMenuItem {
  title: string;
  href: string;
  comingSoon?: boolean;
}
