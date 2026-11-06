
import styles from './App.module.css';
import { useTodos } from './features/todos/model/useTodos';
import { TodoFilters } from './features/todos/ui/TodoFilters';
import { TodoForm } from './features/todos/ui/TodoForm';
import { TodoList } from './features/todos/ui/TodoList';


const App = () => {
  const { todos, totalCount, filter, setFilter, addTodo, toggleTodo, removeTodo } = useTodos();

  return (
    <main className={styles.app}>
      <h1 className={styles.title}>Список задач</h1>

      <TodoForm onAdd={addTodo} />
      <TodoFilters value={filter} onChange={setFilter} />
      <TodoList
        todos={todos}
        totalCount={totalCount}
        filter={filter}
        onToggle={toggleTodo}
        onRemove={removeTodo}
      />
    </main>
  );
};

export default App;