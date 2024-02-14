import { User } from "./user";

export interface Message {
  sender: User;
  recepient: User;
  message: string;
  createdAt?: string;

  time?: string;
}
