import React, { useState } from 'react';
import './index.css';

function App() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    weight: '',
    height: '',
    dob: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send user data to the server (to be implemented).
    console.log('User submitted:', user);
  };

  return (
    <div className="App">
      <h1>Fitness App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </label>
        {/* Add more input fields for other user information */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default App;

