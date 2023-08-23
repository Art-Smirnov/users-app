import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { Button, Container, InputGroup, Stack, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useSortedItems from '../hooks/useSortedItems';
import useDebounce from '../hooks/useDebounce';

const Users = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const { sortedItems, toggleSortOrder, currentSortOrder } = useSortedItems(
    users,
    'asc',
  );
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = sortedItems.filter((user) =>
    user.username.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
  );

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
      <div className="col-md-6">
        <InputGroup size="lg" className="mb-5">
          <Form.Control
            type="text"
            placeholder="Search by username"
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Search by username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
      <Stack gap={3}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
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
                <Button
                  onClick={() => handleGoToAlbums(user.id)}
                  variant="dark"
                >
                  Albums
                </Button>
              </div>
            </div>
          ))
        ) : (
          <h1>No Users..</h1>
        )}
      </Stack>
    </Container>
  );
};

export default Users;
