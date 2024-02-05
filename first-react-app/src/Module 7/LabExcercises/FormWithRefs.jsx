// Excercise 3: Form with Refs
//Create a simple form with an input for a username and a submit button. Use useRef to focus the input when the form mounts. Alert the username when the form is submitted.

import React, { useRef, useState } from "react";

function SimpleForm() {
  // Create a ref to focus the input field
  const usernameRef = useRef(null);

  // State to store the username
  const [username, setUsername] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Alert the entered username
    alert(`Username submitted: ${username}`);
  };

  // Use useEffect to focus the input field when the component mounts
  React.useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div>
      <h3>Simple Form</h3>
      {/* Form with controlled input and submit button */}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          {/* Input field with value and onChange handlers */}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ref={usernameRef} // Attach the ref to the input field
          />
        </label>
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;
