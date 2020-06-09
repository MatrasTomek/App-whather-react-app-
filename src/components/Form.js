import React from "react";
import "./App.css";

const Form = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input
        onChange={props.change}
        type="text"
        value={props.value}
        placeholder="Wpisz miasto..."
      />
      <button>Wyszukaj miasta</button>
    </form>
  );
};

export default Form;
