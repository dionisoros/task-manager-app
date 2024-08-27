export interface TaskCreateRequest {
  id: string;
  title: string;
  priority: string;
  status: string;
  dueDate: string;
  creationDate: string;
  description?: string;
}
