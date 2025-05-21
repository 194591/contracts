import type { DataModel } from "../common";

export interface ITask extends DataModel {
  id: string;
  name: string;
  description?: string;
  dueDate?: Date;
  attachments?: string[];
}
