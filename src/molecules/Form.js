import React from 'react';
import { Label } from '../atoms';

function Form(props) {
  return (
    <form className="f-form" name={props.name} onSubmit={props.handleSubmit}>
      <Label>{props.label}</Label>
      {props.children}
      <input type="submit" value="Submit" />
      {props.formError && (
        <div className="f-form-error">
          <Label>{props.errorMessage}</Label>
        </div>
      )}
    </form>
  );
}

export default Form;
