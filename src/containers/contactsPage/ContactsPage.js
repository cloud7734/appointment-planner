import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ isDuplicate, setIsDuplicate ] = useState(false);
  const { contacts, onSubmit } = props;
  let duplicateErrorMessage = "Contact name already exists";

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    setIsDuplicate(contacts.some(n => n.name === name));
  }, [name])

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      onSubmit({name, phone, email});
      setName('')
      setPhone('')
      setEmail('')
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name} 
          setName={setName} 
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
        <p>{isDuplicate && duplicateErrorMessage}</p>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList arr={contacts} />
      </section>
    </div>
  );
};
