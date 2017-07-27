import React from 'react';
import AddUser from '../../containers/AddUser/AddUser';
import UserSearch from '../../containers/UserSearch/UserSearch';
import VisibleUsers from '../../containers/VisibleUsers/VisibleUsers';
import './UserList.css';

const UserList = () => (
  <div className="user-list">
    <AddUser />
    <UserSearch />
    <VisibleUsers />
  </div>
);

export default UserList;
