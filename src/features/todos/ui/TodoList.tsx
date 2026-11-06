
import type { Todo, TodoFilter } from '../model/types';
import { TodoItem } from './TodoItem';
import styles from './TodoList.module.css';

interface TodoListProps {
  todos: Todo[];
  totalCount: number;
  filter: TodoFilter;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const EMPTY_FILTER_MESSAGES: Record<TodoFilter, string> = {
  all: 'Задач нет',
  active: 'Активных задач нет',
  completed: 'Выполненных задач нет',
};

export const TodoList = ({ todos, totalCount, filter, onToggle, onRemove }: TodoListProps) => {
  if (totalCount === 0) {
    return <p className={styles.empty}>Задач пока нет. Добавьте первую!</p>;
  }

  if (todos.length === 0) {
    return <p className={styles.empty}>{EMPTY_FILTER_MESSAGES[filter]}</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  );
};