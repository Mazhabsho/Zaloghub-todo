
import type { Todo, TodoAction } from './types';

export const todosReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case 'added':
      return [action.payload, ...state];

    case 'toggled':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo,
      );

    case 'removed':
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
};