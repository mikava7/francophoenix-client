import React, { useState } from "react";
import styled from "styled-components";
function RegistrationForm() {
  // State to store user data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // State to store the list of registered users
  const [userList, setUserList] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new user object
    const newUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    // Add the new user to the list of registered users
    setUserList([...userList, newUser]);

    // Clear the form fields
    setFormData({ username: "", email: "", password: "" });

    // You can perform additional registration logic here

    console.log("Registration data:", newUser);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <FormContainer>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <FieldContainer>
          <Label htmlFor="username">Username</Label>
          <InputField
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </FieldContainer>
        <FieldContainer>
          <Label htmlFor="email">Email</Label>
          <InputField
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FieldContainer>
        <FieldContainer>
          <Label htmlFor="password">Password</Label>
          <InputField
            type="password"
            id="password"
            className="password" // Assign the class here
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </FieldContainer>
        <button type="submit">Register</button>
      </form>
      <h2>Registered Users</h2>
      <ul>
        {userList.map((user, index) => (
          <li key={index}>
            Username: {user.username}, Email: {user.email}
          </li>
        ))}
      </ul>{" "}
    </FormContainer>
  );
}

export default RegistrationForm;
// Styled component for the form container
const FormContainer = styled.div`
  /* Styles for the entire form container */
`;

// Styled component for each form field container
const FieldContainer = styled.div`
  margin-bottom: 20px;

  /* Additional styles for the container */
`;

// Styled component for the form field label
const Label = styled.label`
  /* Styles for the label element */
`;

// Styled component for the form field input
const InputField = styled.input`
  width: 100%;
  padding: 10px;
  &.password {
    background: #f3dede;
  }
  &[type="text"] {
    background: lightblue;
    border: 1px solid blue;
  }
  &#email {
    background: yellow;
  }
`;
