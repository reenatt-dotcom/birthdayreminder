import React, { useState } from 'react';
import Header from './Header';
import BirthdayList from './BirthdayList';
import AddBirthdayForm from './AddBirthdayForm';
import './styles.css'

function App() {
  const [birthdays, setBirthdays] = useState([]);

  // Function to add a new birthday to the list
  const addBirthday = (birthday) => {
    setBirthdays([...birthdays, birthday]);
  };

  // Function to remove a birthday from the list
  const removeBirthday = (id) => {
    setBirthdays(birthdays.filter((birthday) => birthday.id !== id));
  };

  return (
    <div>
      <Header />
      <div className="container">
        <AddBirthdayForm addBirthday={addBirthday} />
        <BirthdayList birthdays={birthdays} removeBirthday={removeBirthday} />
      </div>
    </div>
  );
}

export default App;
