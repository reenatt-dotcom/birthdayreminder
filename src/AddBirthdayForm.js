import React, { useState } from 'react';

function AddBirthdayForm({ addBirthday }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!name || !date) {
      alert('Please enter a name and date');
      return;
    }

    // Create a new birthday object
    const newBirthday = {
      id: Date.now(), // Generate a unique ID using timestamp
      name,
      date,
    };

    // Call the addBirthday function from the parent component to add the new birthday
    addBirthday(newBirthday);

    // Clear form inputs
    setName('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Birthday</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddBirthdayForm;
