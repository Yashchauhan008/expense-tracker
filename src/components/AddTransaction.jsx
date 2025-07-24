// src/components/AddTransaction.jsx
import React, { useState } from 'react';

function AddTransaction({ addTransaction, categories }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount || !category) {
      alert('Please fill all fields');
      return;
    }
    addTransaction({ text, amount: +amount, type, category });
    setText('');
    setAmount('');
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-xl mt-8">
      <h3 className="text-xl font-semibold mb-4 text-cyan-300">Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="w-full p-2 bg-gray-700 rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-2 bg-gray-700 rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="w-full p-2 bg-gray-700 rounded">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
            <option value="loan">Loan (Recoverable)</option>
            <option value="investment">Investment (Stocks)</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 bg-gray-700 rounded">
            <option value="">Select Category</option>
            {categories.filter(c => c.type === type || c.type === 'general').map(c => (
              <option key={c.id} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
        <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
