import React from "react";

/**
 * TodoStats Component
 * Displays statistics about todos
 */
const TodoStats = ({ stats }) => {
  const completionPercentage =
    stats.total === 0 ? 0 : Math.round((stats.completed / stats.total) * 100);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {/* Total Todos */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow p-4 text-white">
        <p className="text-sm font-medium opacity-90">Total Tasks</p>
        <p className="text-3xl font-bold">{stats.total}</p>
      </div>

      {/* Pending Todos */}
      <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg shadow p-4 text-white">
        <p className="text-sm font-medium opacity-90">Pending</p>
        <p className="text-3xl font-bold">{stats.pending}</p>
      </div>

      {/* Completed Todos */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow p-4 text-white">
        <p className="text-sm font-medium opacity-90">Completed</p>
        <p className="text-3xl font-bold">{stats.completed}</p>
      </div>

      {/* Completion Percentage */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow p-4 text-white">
        <p className="text-sm font-medium opacity-90">Completion %</p>
        <p className="text-3xl font-bold">{completionPercentage}%</p>
      </div>
    </div>
  );
};

export default TodoStats;
