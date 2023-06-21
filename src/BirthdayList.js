import React from 'react';
import BirthdayItem from './BirthdayItem';

function BirthdayList({ birthdays, removeBirthday }) {
  return (
    <div className="birthday-list">
      <h2>Birthday List</h2>
      {birthdays.length === 0 ? (
        <p>No birthdays to display</p>
      ) : (
        <ul>
          {birthdays.map((birthday) => (
            <li key={birthday.id}>
              <BirthdayItem birthday={birthday} removeBirthday={removeBirthday} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BirthdayList;
