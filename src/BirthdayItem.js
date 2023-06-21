import React from 'react';

function BirthdayItem({ birthday, removeBirthday }) {
  const { id, name, date } = birthday;

  // Function to handle the remove button click
  const handleRemoveClick = () => {
    removeBirthday(id);
  };

  return (
    <div className="birthday-item">
      <div>
        <span className="birthday-name">{name}</span>{' '}
        <span className="birthday-date">{date}</span>
      </div>
      <button className="remove-button" onClick={handleRemoveClick}>
        Remove
      </button>
    </div>
  );
}

export default BirthdayItem;
