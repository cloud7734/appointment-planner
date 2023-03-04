import React from "react";
import Input from 'react-phone-number-input/input';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    // ContactForm
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input 
            placeholder="Enter name" 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)}>
          </input>
        </label>
        <label>Phone Number:
          <Input 
            defaultCountry="US"
            placeholder="Enter phone number" 
            value={phone} 
            onChange={e => setPhone(e)} >
          </Input>
        </label>
        <label>Email Address:
          <input 
            placeholder="Enter email address" 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)}>
          </input>
        </label>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};
