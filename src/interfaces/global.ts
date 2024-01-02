import { ReactNode } from "react";

export interface HowItWorkStep {
  icon: string;
  title: string;
  description: string;
}
export interface HowItWorks {
  student: HowItWorkStep[];
  advisor: HowItWorkStep[];
}
