import { User } from "./user";

export enum NotificationStatus {
  UNREAD = "UNREAD",
  READ = "READ",
}

export enum NotificationCtaType {
  MESSAGE = "MESSAGE",
  CONNECTION_REQUEST = "CONNECTION_REQUEST",
  NEW_SOP_TASK = "NEW_SOP_TASK",
  COMPLETED_SOP = "COMPLETED_SOP",
}

export interface Notification {
  id: string;
  sender: User;
  recipient: User;
  description: string;
  ctaType?: NotificationCtaType;
  itemId?: string;
  createdAt: string;
  status: NotificationStatus;
}
