import React from "react";

const Form = () => {
  return (
    <form name="form">
      <label htmlFor="name" typeof="text">Name:</label>
      <input id="name" />
      <label htmlFor="email" typeof="text">Email:</label>
      <input id="email" />
      <button>Submit</button>
    </form>
  );
};

export default Form;
