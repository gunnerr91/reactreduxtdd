import React from "react";

const InputWithLabel = ({ label, inputValue, changeHandler }) => (
  <React.Fragment>
    <label data-game-label>{label}</label>
    <input type="text" value={inputValue} onChange={changeHandler} />
  </React.Fragment>
);

export default InputWithLabel;
