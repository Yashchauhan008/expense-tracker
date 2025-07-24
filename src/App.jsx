// src/App.jsx
import React, { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import CategoryManager from './components/CategoryManager';

function App() {
  const [transactions, setTransactions] = useLocalStorage('transactions', []);
  const [categories, setCategories] = useLocalStorage('categories', [
    { id: 1, name: 'Salary', type: 'income' },
    { id: 2, name: 'Groceries', type: 'expense' },
    { id: 3, name: 'Bills', type: 'expense' },
    { id: 4, name: 'Loan Given', type: 'loan' },
    { id: 5, name: 'Stocks', type: 'investment' },
  ]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  const addCategory = (category) => {
    setCategories([...categories, { ...category, id: Date.now() }]);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <Dashboard transactions={transactions} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <AddTransaction addTransaction={addTransaction} categories={categories} />
            <CategoryManager addCategory={addCategory} />
          </div>
          <TransactionList transactions={transactions} categories={categories} />
        </div>
      </main>
    </div>
  );
}

export default App;
