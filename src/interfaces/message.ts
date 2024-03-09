import { MessageStatus } from "lib/enum";
import { User } from "./user";

export interface Message {
  id: string;
  sender?: Partial<User>;
  content: string;
  createdAt?: string;
  status: MessageStatus;
}

export interface ChatListItem {
  id: string;
  user: Partial<User>;
  lastMessage: ChatLastMessage;
  unreadMessageCount: number;
}

export interface ChatLastMessage {
  content: string;
  createdAt: string;
}
