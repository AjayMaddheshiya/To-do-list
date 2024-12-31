import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => onToggle(todo.id)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                ${
                  todo.completed
                    ? 'bg-green-500 border-green-500'
                    : 'border-gray-300'
                }`}
            >
              {todo.completed && <Check size={16} className="text-white" />}
            </button>
            <span
              className={`text-lg ${
                todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
              }`}
            >
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => onDelete(todo.id)}
            className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
          >
            <Trash2 size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
}