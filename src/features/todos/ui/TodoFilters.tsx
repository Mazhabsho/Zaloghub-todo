
import { cn } from '../../../shared/lib/cn';
import type { TodoFilter } from '../model/types';
import styles from './TodoFilters.module.css';

interface TodoFiltersProps {
  value: TodoFilter;
  onChange: (filter: TodoFilter) => void;
}

const FILTER_OPTIONS: ReadonlyArray<{ value: TodoFilter; label: string }> = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'completed', label: 'Выполненные' },
];

export function TodoFilters({ value, onChange }: TodoFiltersProps) {
  return (
    <div className={styles.filters} role="group" aria-label="Фильтр задач">
      {FILTER_OPTIONS.map((option) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            className={cn(styles.button, isActive && styles.active)}
            aria-pressed={isActive}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}