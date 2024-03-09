import { UserRole } from "lib/enum";
import { EducationBackground, EducationGoal } from "./education";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  location?: string;
  jobTitle?: string;
  email: string;
  role: UserRole;
  isVerified: boolean;
  phone?: string;
  profilePicture?: string;

  educationBackground?: EducationBackground[];
  educationGoal?: EducationGoal[];
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

export interface SocialMediaHandle {
  platform: {
    name: string;
    urlPrefix: string;
  };
  handle: string;
}

export interface WorkExperience {
  id: string;
  position: string;
  company: string;
}
