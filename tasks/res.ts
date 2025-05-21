export interface ITask {
  id: string;
  name: string;
  description?: string;
  dueDate?: string | Date;
  attachments?: string[];
}
