
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
}

export type TodoFilter = 'all' | 'active' | 'completed';

export type TodoAction =
  | { type: 'added'; payload: Todo }
  | { type: 'toggled'; payload: { id: string } }
  | { type: 'removed'; payload: { id: string } };