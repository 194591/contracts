export interface ITask {
  id: string;
  name: string;
  status: string;
  description?: string;
  dueDate?: Date;
  attachments?: string[];
}
