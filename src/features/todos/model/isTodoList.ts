
import type { Todo } from './types';

const isTodo = (value: unknown): value is Todo => {
  if (typeof value !== 'object' || value === null) return false;

  const candidate = value as Record<string, unknown>;

  return (
    typeof candidate.id === 'string' &&
    typeof candidate.title === 'string' &&
    typeof candidate.completed === 'boolean' &&
    typeof candidate.createdAt === 'number'
  );
};

export const isTodoList = (value: unknown): value is Todo[] => {
  return Array.isArray(value) && value.every(isTodo);
};