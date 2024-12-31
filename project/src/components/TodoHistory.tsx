import React from 'react';
import { History } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoHistoryProps {
  todos: Todo[];
}

export function TodoHistory({ todos }: TodoHistoryProps) {
  const completedTodos = todos.filter(todo => todo.completed);
  
  return (
    <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <History className="w-6 h-6 text-purple-500" />
        <h2 className="text-xl font-semibold text-gray-800">Task History</h2>
      </div>
      
      {completedTodos.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No completed tasks yet!</p>
      ) : (
        <ul className="space-y-2">
          {completedTodos.map(todo => (
            <li key={todo.id} className="flex items-center gap-3 text-gray-600">
              <span className="text-green-500">✓</span>
              <span className="line-through">{todo.text}</span>
              <span className="text-sm text-gray-400 ml-auto">
                {new Date(todo.createdAt).toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}