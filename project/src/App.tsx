import React, { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodoHistory } from './components/TodoHistory';
import { Footer } from './components/Footer';
import { Todo } from './types/todo';
import { ClipboardList } from 'lucide-react';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto max-w-2xl px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          <div className="flex items-center gap-3">
            <ClipboardList className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-800">Todo List</h1>
          </div>
          
          <TodoForm onAdd={addTodo} />
          
          <div className="mt-8">
            {todos.length === 0 ? (
              <p className="text-center text-gray-500 py-8">
                No todos yet. Add one above!
              </p>
            ) : (
              <TodoList
                todos={todos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            )}
          </div>
        </div>

        <TodoHistory todos={todos} />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;