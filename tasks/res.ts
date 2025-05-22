export interface ITask {
  id: string;
  name: string;
  description?: string;
  dueDate?: Date;
  attachments?: string[];
}
