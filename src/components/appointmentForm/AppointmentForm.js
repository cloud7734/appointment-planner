import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const todaysDate = getTodayString();

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:
        <input 
          placeholder="Enter appointment title" 
          type="text" 
          value={title} 
          onChange={e => setTitle(e.target.value)}>
        </input>
      </label>
      <label>Date:
        <input 
          placeholder="Enter appointment date" 
          type="date" 
          value={date} 
          onChange={e => setDate(e.target.value)}
          min={todaysDate}>
        </input>
      </label>
      <label>Time:
        <input 
          placeholder="Enter appointment time" 
          type="time" 
          value={time} 
          onChange={e => setTime(e.target.value)}>
        </input>
      </label>
      <ContactPicker 
        obj={contacts} 
        onChange={e => setContact(e.target.value)}/>
      <button type="submit">Add Appointment</button>
    </form>
  );
};
