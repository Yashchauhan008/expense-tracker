// src/components/TransactionList.jsx
import React from 'react';

function TransactionList({ transactions, categories }) {
  const getTypeColor = (type) => {
    switch (type) {
      case 'income': return 'border-green-500';
      case 'expense': return 'border-red-500';
      case 'loan': return 'border-yellow-500';
      case 'investment': return 'border-blue-500';
      default: return 'border-gray-500';
    }
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-xl">
      <h3 className="text-xl font-semibold mb-4 text-cyan-300">Transaction History</h3>
      <ul className="space-y-3">
        {transactions.map(transaction => (
          <li key={transaction.id} className={`flex justify-between items-center p-3 bg-gray-700 rounded border-l-4 ${getTypeColor(transaction.type)}`}>
            <div>
              <span className="font-bold">{transaction.text}</span>
              <span className="text-sm text-gray-400 ml-2">({transaction.category})</span>
            </div>
            <span className={`font-semibold ${transaction.type === 'income' ? 'text-green-400' : 'text-red-400'}`}>
              {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
