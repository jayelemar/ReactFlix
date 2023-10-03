import React from 'react';
import Users from '../components/users'

function User  () {
  useEffect(() => {
    document.title = "ReactFlix | Users";
  }, []);
  return (
    <div>
      <h2>User</h2>
      <Users />
    </div>
  )
};

export default User;
