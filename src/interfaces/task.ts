import { User } from "./user";

export interface SopTask {
  id: string;
  title: string;
  description: string;
  quantity: string;
  collectionStartDate: string;
  collectionEndDate: string;
  returnStartDate: string;
  returnEndDate: string;
  createdAt: string;
  status: string;
  user?: User;
}

export interface SopDocument {
  id: string;
  content: string;
  user?: User;
  task: SopTask;
  createdAt: string;
  status: string;
  review?: SopDocumentReview;
}

export interface SopDocumentReview {
  id: string;
  content: string;
  createdAt: string;
  status: string;
}
