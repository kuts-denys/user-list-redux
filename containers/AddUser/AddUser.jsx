/* eslint-disable import/no-mutable-exports */
import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser } from '../../actions/index';
import './AddUser.css';

let AddUser = ({ dispatch }) => {
  let input;

  return (
    <form
      className="user-input-form"
      onSubmit={(event) => {
        event.preventDefault();
        if (input.value === '') return;
        dispatch(addUser(input.value));
        input.value = '';
      }}
    >
      <label htmlFor="userInput">Add new user: </label>
      <input
        ref={(node) => {
          input = node;
        }}
        id="userInput"
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
};

AddUser.propTypes = {
  dispatch: propTypes.func.isRequired,
};

AddUser = connect()(AddUser);

export default AddUser;

