import React from 'react';
import useResources from './useResources';

const UserList = () => {
  // Zero logic related to network requests inside the component
  const users = useResources('users');

  return (
  <ul>
    {users.map(user => (
    <li key={user.id}>{user.name}</li>
    ))}
  </ul>
  )
}

export default UserList;