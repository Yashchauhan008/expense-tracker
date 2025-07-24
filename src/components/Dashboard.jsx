// src/components/Dashboard.jsx
import React from 'react';

function Dashboard({ transactions }) {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const loans = transactions
    .filter(t => t.type === 'loan')
    .reduce((acc, t) => acc + t.amount, 0);
    
  const investments = transactions
    .filter(t => t.type === 'investment')
    .reduce((acc, t) => acc + t.amount, 0);

  const inHand = income - expense - loans - investments;

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Master Dashboard</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-lg font-bold text-green-400">Total Income</h3>
          <p className="text-2xl">${income.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-lg font-bold text-red-400">Total Expense</h3>
          <p className="text-2xl">${expense.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-400">Recoverable (Loans)</h3>
          <p className="text-2xl">${loans.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-lg font-bold text-blue-400">In-Hand Money</h3>
          <p className="text-2xl">${inHand.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
