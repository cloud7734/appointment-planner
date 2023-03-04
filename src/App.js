import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  // empty state for contact object array
  const [ contacts, setContacts ] = useState([
    {
      name: "Bob Dole",
      phone: "123-456-7890",
      email: "BOBdOLE69@uknow.com"
    }
  ])

  // empty state for appointment object array
  const [ appointments, setAppointments ] = useState([
    {
      title: "Product Launch Party",
      contact: "Bob Dole",
      date: "4/20/69",
      time: "11:11pm"
    }
  ])

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  // add contact function
  const addContacts = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  }

  // add appointment function
  const addAppointments = (newAppointment) => {
    setAppointments((prev) => [...prev, newAppointment]);
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} onSubmit={addContacts}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} onSubmit={addAppointments}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
