import React, { useState, useEffect } from "react";
import TodoForm from "../Components/TodoForm";
import TodoItem from "../Components/TodoItem";
import TodoStats from "../Components/TodoStats";

/**
 * HomePage - Main TODO App Page
 */
const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // LocalStorage Keys
  const TODOS_KEY = "todoApp_todos";

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem(TODOS_KEY);
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error("Failed to load todos from localStorage:", error);
      }
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  // Add or Update Todo
  const handleAddTodo = (formData) => {
    if (editingTodo) {
      // Update existing todo
      setTodos(
        todos.map((todo) =>
          todo.id === editingTodo.id
            ? {
                ...todo,
                ...formData,
              }
            : todo,
        ),
      );
      setEditingTodo(null);
    } else {
      // Add new todo
      const newTodo = {
        id: Date.now().toString(),
        ...formData,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTodos([newTodo, ...todos]);
    }
  };

  // Delete Todo
  const handleDeleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
      if (editingTodo?.id === id) {
        setEditingTodo(null);
      }
    }
  };

  // Toggle Todo Completion
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // Edit Todo
  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter todos
  const getFilteredAndSortedTodos = () => {
    let filtered = todos;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (t) =>
          t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          t.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Sort by newest first
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return filtered;
  };

  // Calculate statistics
  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    pending: todos.filter((t) => !t.completed).length,
  };

  const filteredTodos = getFilteredAndSortedTodos();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Task Manager</h1>
          <p className="text-blue-100">
            Organize, prioritize, and complete your tasks
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Statistics */}
        <TodoStats stats={stats} />

        {/* Add/Edit Form */}
        <TodoForm
          onSubmit={handleAddTodo}
          initialData={editingTodo}
          isEditing={!!editingTodo}
        />

        {editingTodo && (
          <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <button
              onClick={() => setEditingTodo(null)}
              className="text-yellow-800 hover:text-yellow-900 font-medium"
            >
              ✕ Exit Edit Mode
            </button>
          </div>
        )}

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>

        {/* Todo List */}
        <div>
          {filteredTodos.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-500 text-lg">
                {todos.length === 0
                  ? "😊 No tasks added yet. Add a new task!"
                  : "🔍 No tasks match your search criteria."}
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Tasks ({filteredTodos.length})
              </h2>
              {filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete={handleDeleteTodo}
                  onToggle={handleToggleTodo}
                  onEdit={handleEditTodo}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
