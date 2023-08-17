import React, { useState } from 'react';
import './styles.css';
import SignUpForm from './SignUpForm.js';
import ProfilePage from './ProfilePage.js';

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  const [userData, setUserData] = useState(null);

  const handleSignUp = (data) => {
    // Save the user data to the state
    setUserData(data);
  };

  return (
    <div className="App">
      {userData ? (
        <ProfilePage userData={userData} />
      ) : (
        <SignUpForm onSignUp={handleSignUp} />
      )}
      <header className="header">
        <h1>Groove</h1>
      </header>
      <div className="form-container">
        <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
        <form>
          <input
            className="input-field"
            type="text"
            placeholder="Username"
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
          />
          {isSignUp && (
            <input
              className="input-field"
              type="password"
              placeholder="Confirm Password"
            />
          )}
          <button className="button">{isSignUp ? 'Sign Up' : 'Log In'}</button>
        </form>
        <p className="sign-up-link">
          {isSignUp
            ? 'Already have an account?'
            : "Don't have an account?"}
          <span onClick={handleToggleSignUp}>
            {isSignUp ? ' Log In' : ' Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
