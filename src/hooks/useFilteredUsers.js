import { useState } from 'react';

const useFilteredUsers = (users, searchTerm) => {
  const [filteredUsers, setFilteredUsers] = useState([]);

  const filtered = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  setFilteredUsers(filtered);

  return filteredUsers;
};

export default useFilteredUsers;
