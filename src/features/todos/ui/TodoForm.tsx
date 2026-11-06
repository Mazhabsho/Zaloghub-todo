
import { useState, type FormEvent } from 'react';
import styles from './TodoForm.module.css';

interface TodoFormProps {
  onAdd: (title: string) => boolean;
}

export const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [title, setTitle] = useState('');
  const canSubmit = title.trim().length > 0;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (onAdd(title)) {
      setTitle('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Что нужно сделать?"
        aria-label="Новая задача"
        autoFocus
      />
      <button className={styles.button} type="submit" disabled={!canSubmit}>
        Добавить
      </button>
    </form>
  );
};