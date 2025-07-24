// src/components/CategoryManager.jsx
import React, { useState } from 'react';

function CategoryManager({ addCategory }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('expense');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Please enter a category name');
      return;
    }
    addCategory({ name, type });
    setName('');
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-xl mt-8">
      <h3 className="text-xl font-semibold mb-4 text-cyan-300">Add New Category</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Category Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 bg-gray-700 rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Category Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="w-full p-2 bg-gray-700 rounded">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
            <option value="loan">Loan</option>
            <option value="investment">Investment</option>
          </select>
        </div>
        <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
          Add Category
        </button>
      </form>
    </div>
  );
}

export default CategoryManager;
