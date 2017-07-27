import React from 'react';
import propTypes from 'prop-types';
import './UserRow.css';

const UserRow = ({ userName, onUserDelete }) => (
  <li className="user-row">
    <span>Username: {userName}</span>
    <button type="submit" onClick={onUserDelete}>Delete</button>
  </li>
);

UserRow.propTypes = {
  onUserDelete: propTypes.func.isRequired,
  userName: propTypes.string.isRequired,
};

export default UserRow;
