import React from "react";

export const ContactPicker = (props) => {
  const { obj, onChange } = props;
  const objects = obj.map(a => a.name);

  return (
    <select onChange={e => onChange(e)}>
      {objects?.map((item, index) => (
        index === 0 ? <option key={index}>No Contact Selected</option> : <option key={index} value={item}>{item}</option>
      ))}
    </select>
  );
};
