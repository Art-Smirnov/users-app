import { useEffect, useState } from 'react';
import $ from 'jquery';

export function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const [usersError, setUsersError] = useState('');
  const [usersLoading, setUsersLoading] = useState(true);

  useEffect(() => {
    setUsersLoading(true);
    $.get('https://jsonplaceholder.typicode.com/users')
      .done((data) => {
        setUsers(data);
        setUsersLoading(false);
      })
      .fail(() => {
        setUsersError('Failed to fetch Users');
        setUsersLoading(false);
      });
  }, []);

  return { users, usersError, usersLoading };
}
