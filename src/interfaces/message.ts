import { User } from "./user";

export interface Message {
  sender?: User;
  recepient?: User;

  senderId?: string;
  receiverId?: string;
  content: string;
  createdAt?: string;

  time?: string;
}
