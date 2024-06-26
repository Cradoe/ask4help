import { AxiosResponse } from "axios";
import { UserRole } from "lib/enum";
import { ReactElement } from "react";

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

export interface SidebarMenu extends HeaderMenu {
  icon: ReactElement;
  role?: UserRole;
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

export interface Pagination {
  page?: number;
  limit?: number;
  total?: number;
  hasNextPage?: boolean;
  previousPage?: number;
  nextPage?: number;
}

export interface ProposedFeature {
  id: string;
  name: string;
}
