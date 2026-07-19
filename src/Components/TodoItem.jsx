import React from "react";

/**
 * TodoItem Component
 * Displays individual todo item with edit and delete options
 */
const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-3 transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="w-5 h-5 text-blue-600 rounded cursor-pointer mt-1"
          />
          <div className="flex-1">
            <h3
              className={`text-lg font-medium ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}`}
            >
              {todo.title}
            </h3>
            {todo.description && (
              <p
                className={`text-sm mt-1 ${todo.completed ? "text-gray-300" : "text-gray-600"}`}
              >
                {todo.description}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(todo)}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm px-2 py-1 rounded hover:bg-blue-50"
          >
            ✏️ Edit
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="text-red-600 hover:text-red-800 font-medium text-sm px-2 py-1 rounded hover:bg-red-50"
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
