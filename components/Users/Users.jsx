import React from 'react';
import propTypes from 'prop-types';
import UserRow from '../UserRow/UserRow';
import './Users.css';

const Users = ({ handleDelete, visibleUsers }) => (
  <ul className="user-table">
    {visibleUsers.map(user => (
      <UserRow key={user.id} userName={user.userName} onUserDelete={() => handleDelete(user.id)} />
    ))}
  </ul>
);

Users.propTypes = {
  visibleUsers: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    userName: propTypes.string.isRequired,
  })).isRequired,
  handleDelete: propTypes.func.isRequired,
};

export default Users;
