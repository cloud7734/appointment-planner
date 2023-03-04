import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  // empty state for contact object array
  const [ contacts, setContacts ] = useState([{}])

  // empty state for appointment object array
  const [ appointments, setAppointments ] = useState([{}])

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
            <AppointmentsPage contacts={contacts} appointments={appointments} onSubmit={addAppointments}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
