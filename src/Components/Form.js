import React from "react";

const onSubmitHandler = (e) => {
  e.preventDefault();
  console.log("Submitted Form");
};

const Form = () => {
  return (
    <form name="form" onSubmit={onSubmitHandler}>
      <label htmlFor="name" typeof="text">
        Name:
      </label>
      <input id="name" />
      <label htmlFor="email" typeof="text">
        Email:
      </label>
      <input id="email" />
      <button
        type="submit"
        name="submit"
        onClick={() => console.log("Clicked Submit")}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
