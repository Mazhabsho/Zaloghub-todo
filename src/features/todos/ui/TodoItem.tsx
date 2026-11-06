
import { memo } from 'react';
import { cn } from '../../../shared/lib/cn';
import type { Todo } from '../model/types';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

function TodoItemComponent({ todo, onToggle, onRemove }: TodoItemProps) {
  return (
    <li className={cn(styles.item, todo.completed && styles.completed)}>
      <label className={styles.label}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={styles.title}>{todo.title}</span>
      </label>
      <button
        className={styles.remove}
        type="button"
        onClick={() => onRemove(todo.id)}
        aria-label={`Удалить задачу «${todo.title}»`}
      >
        ×
      </button>
    </li>
  );
}

export const TodoItem = memo(TodoItemComponent);