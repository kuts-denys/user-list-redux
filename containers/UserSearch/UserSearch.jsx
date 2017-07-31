/* eslint-disable import/no-mutable-exports */
import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { search } from '../../actions/index';
import './UserSearch.css';

const UserSearch = ({ dispatch }) => {
  let input;

  return (
    <div className="user-search">
      <label htmlFor="search">Search:</label>
      <input
        ref={(node) => {
          input = node;
        }}
        id="search"
        type="text"
        onChange={() => {
          dispatch(search(input.value));
        }}
      />
    </div>
  );
};

UserSearch.propTypes = {
  dispatch: propTypes.func.isRequired,
};

export default connect()(UserSearch);
