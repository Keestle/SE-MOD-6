import { useState } from "react";

function LoginForm1() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [submitResult, setSubmitResult] = useState('');

// State variable to track the number of incorrect password attempts
  const [attempts, setAttempts] = useState(0); 
  // Set the maximum allowed incorrect attempts
  const maxAttempts = 3; 


  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();


// Password validation conditions
    if (userPassword.length < 5) {
      setSubmitResult('Password must be at least 5 characters long');
    } else if (userPassword === userEmail) {
      setSubmitResult('Successful login.');
    } else {
      setAttempts(attempts + 1); // Increment the attempts counter

// Check if the attempts limit is reached
      if (attempts >= maxAttempts - 1) {
        setSubmitResult(`Login attempts limit exceeded. Please try again later.`);
      } else {
        setSubmitResult(`Incorrect password. Attempts left: ${maxAttempts - attempts - 1}`);
      }
    }
  };

  // Hide the form if login is successful or attempts limit is exceeded
  const showForm = attempts < maxAttempts && submitResult !== 'Successful login.';

  return (
    <div>
      {showForm && (
        <div className="LoginForm componentBox">
          <div className="formRow">
            <label>Email Address:
              <input
                type="email"
                value={userEmail}
                name="userEmail"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="formRow">
            <label>Password:
              <input
                type="password"
                value={userPassword}
                name="password"
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </label>
          </div>
          <div>
            Email in state: {userEmail}
          </div>

          <div className="formRow">
            <form onSubmit={handleSubmit}>
              <button>Log In</button>
            </form>
          </div>
          <div className="formRow">
            <p>{submitResult}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginForm1;
