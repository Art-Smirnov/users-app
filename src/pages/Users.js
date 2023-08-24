import React, { useState } from 'react';
import { Button, Container, InputGroup, Form } from 'react-bootstrap';
import useSortedItems from '../hooks/useSortedItems';
import useDebounce from '../hooks/useDebounce';
import { useFetchUsers } from '../hooks/api/dataFetchHooks';
import UsersList from '../components/UsersList';

const Users = () => {
  const { users, usersError, isUsersLoading } = useFetchUsers();
  const { sortedItems, toggleSortOrder, currentSortOrder } = useSortedItems(
    users,
    'asc',
  );
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const filteredUsers = sortedItems.filter((user) =>
    user.username.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
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
      <UsersList
        isLoading={isUsersLoading}
        usersError={usersError}
        users={filteredUsers}
      />
    </Container>
  );
};

export default Users;
