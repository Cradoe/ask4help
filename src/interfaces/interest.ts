import { UserRole } from "lib/enum";

export interface Interest {
  id: string;
  name: string;
  role: UserRole;
}

export interface UserInterest {
  id: string;
  interest: Interest;
}
