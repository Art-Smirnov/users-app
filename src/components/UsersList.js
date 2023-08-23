import React from 'react';
import { Button, Spinner, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const UsersList = ({ users, usersError, isLoading }) => {
  const navigate = useNavigate();
  const handleGoToPosts = (userId) => {
    navigate(`posts/${userId}`);
  };

  const handleGoToAlbums = (userId) => {
    navigate(`albums/${userId}`);
  };

  if (usersError) {
    return <h1>{usersError}</h1>;
  }

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" />
      </div>
    );
  }

  if (users.length < 0) {
    return <h1>No Users..</h1>;
  }

  return (
    <Stack gap={3}>
      {users?.map((user) => (
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
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
    }),
  ).isRequired,
  usersError: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

export default UsersList;
