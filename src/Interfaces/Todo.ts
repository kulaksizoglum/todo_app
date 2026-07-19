/**
 * Todo Interface
 * Defines the structure of a Todo item
 */
export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  dueDate?: string;
  priority: "low" | "medium" | "high";
}

/**
 * Filter Interface
 * Defines the available filters for todos
 */
export interface FilterOptions {
  status: "all" | "completed" | "pending";
  priority?: "all" | "low" | "medium" | "high";
  sortBy?: "date" | "priority" | "title";
}
