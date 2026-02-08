import styled from "./input.module.css";

function Input(props) {
  console.log(props);

  return (
    <div className={styled.inputWrapper}>
      <label>{props.label}</label>
      <input name={props.name} type="text" onChange={props.handleChange} />
    </div>
  );
}

export default Input;
