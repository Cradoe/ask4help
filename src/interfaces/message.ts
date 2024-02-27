import { MessageStatus } from "lib/enum";
import { User } from "./user";

export interface Message {
  id: string;
  sender?: User;
  recepient?: User;

  senderId?: string;
  receiverId?: string;
  content: string;
  createdAt?: string;
  status: MessageStatus;
}

export interface ChatListItem {
  id: string;
  user: ChatContact;
  lastMessage: ChatLastMessage;
  unreadMessageCount: number;
}

export interface ChatContact {
  id: string;
  firstName: string;
  lastName: string;
}

export interface ChatLastMessage {
  content: string;
  createdAt: string;
}
