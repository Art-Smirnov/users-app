import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { Button, Container, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useSortedItems from '../hooks/useSortedItems';

const Users = () => {
  const navigate = useNavigate();

  // const [sortOrder, setSortOrder] = useState('asc');
  const [users, setUsers] = useState([]);

  const { sortedItems, toggleSortOrder, currentSortOrder } = useSortedItems(
    users,
    'asc',
  );

  // const handleSortToggle = () => {
  //   setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  // };
  //
  // const sortedUsers = users.sort((a, b) => {
  //   const nameA = a.username.toLowerCase();
  //   const nameB = b.username.toLowerCase();
  //
  //   if (sortOrder === 'asc') {
  //     return nameA.localeCompare(nameB);
  //   } else {
  //     return nameB.localeCompare(nameA);
  //   }
  // });

  useEffect(() => {
    $.get('https://jsonplaceholder.typicode.com/users')
      .done((data) => {
        setUsers(data);
      })
      .fail(() => {
        console.error('Failed to fetch');
      });
  }, []);

  const handleGoToPosts = (userId) => {
    navigate(`posts/${userId}`);
  };

  const handleGoToAlbums = (userId) => {
    navigate(`albums/${userId}`);
  };

  return (
    <Container className="py-5">
      <Button className="mb-3" variant="dark" onClick={toggleSortOrder}>
        Toggle Sort Order:{' '}
        {currentSortOrder === 'asc' ? 'Ascending' : 'Descending'}
      </Button>
      <Stack gap={3}>
        {sortedItems.map((user) => (
          <div
            key={user.id}
            className="shadow p-4 d-flex flex-column flex-sm-row
              justify-content-between align-items-center"
          >
            <div className="mb-4 mb-sm-0">{user.username}</div>
            <div>
              <Button
                onClick={() => handleGoToPosts(user.id)}
                variant="dark"
                className="me-2"
              >
                Posts
              </Button>
              <Button onClick={() => handleGoToAlbums(user.id)} variant="dark">
                Albums
              </Button>
            </div>
          </div>
        ))}
      </Stack>
    </Container>
  );
};

export default Users;
