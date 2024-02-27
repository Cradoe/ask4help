import { UserRole } from "lib/enum";
import { EducationBackground, EducationGoal } from "./education";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  isVerified: boolean;
  educationBackground?: EducationBackground[];
  educationGoal?: EducationGoal[];
  profilePicture?: string;
}

export interface Connection {
  id: string;
  user: User;
  status: string;
  createdAt: string;
  mutualUsers?: User[];
}

export interface SuggestedConnection {
  user: User;
  mutualUsers?: User[];
}
