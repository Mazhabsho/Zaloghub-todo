
import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { loadFromStorage, saveToStorage } from '../../../shared/lib/storage';
import { filterTodos } from './filterTodos';
import { isTodoList } from './isTodoList';
import { todosReducer } from './todosReducer';
import type { Todo, TodoFilter } from './types';

const STORAGE_KEY = 'zaloghub-todos';

const loadTodos = (fallback: Todo[]): Todo[] => {
  return loadFromStorage(STORAGE_KEY, fallback, isTodoList);
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todosReducer, [], loadTodos);
  const [filter, setFilter] = useState<TodoFilter>('all');

  useEffect(() => {
    saveToStorage(STORAGE_KEY, todos);
  }, [todos]);

  const visibleTodos = useMemo(() => filterTodos(todos, filter), [todos, filter]);

  const addTodo = useCallback((title: string): boolean => {
    const trimmed = title.trim();
    if (!trimmed) return false;

    dispatch({
      type: 'added',
      payload: {
        id: crypto.randomUUID(),
        title: trimmed,
        completed: false,
        createdAt: Date.now(),
      },
    });

    return true;
  }, []);

  const toggleTodo = useCallback((id: string) => {
    dispatch({ type: 'toggled', payload: { id } });
  }, []);

  const removeTodo = useCallback((id: string) => {
    dispatch({ type: 'removed', payload: { id } });
  }, []);

  return {
    todos: visibleTodos,
    totalCount: todos.length,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    removeTodo,
  };
};