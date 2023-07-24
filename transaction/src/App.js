import React, { useState } from 'react';

const initialTransactions = [
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  // Add the rest of the transactions from the provided JSON data
];

const TransactionApp = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newTransaction = {
      id: transactions.length + 1,
      date: form.date.value,
      description: form.description.value,
      category: form.category.value,
      amount: parseFloat(form.amount.value),
    };
    setTransactions([...transactions, newTransaction]);
    form.reset();
  };

  const handleDeleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Recent Bank Transactions</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" required />
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" required />
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" name="category" required />
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" name="amount" step="0.01" required />
        <button type="submit">Add Transaction</button>
      </form>
      <div>
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" value={searchTerm} onChange={handleSearch} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button onClick={() => handleDeleteTransaction(transaction.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionApp;
