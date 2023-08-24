import { Card, Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useFetchPosts } from '../hooks/api/dataFetchHooks';
import React from 'react';
import Meta from '../components/Meta';
import ReturnButton from '../components/ReturnButton';

const UsersPosts = () => {
  const { userId } = useParams();
  const { posts, postsError, isPostsLoading } = useFetchPosts(userId);

  if (postsError) {
    return (
      <h1 className="text-danger d-flex justify-content-center align-items-center vh-100">
        {postsError}
      </h1>
    );
  }

  if (isPostsLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <>
      <Meta
        title="User&#39;s Posts"
        description="View posts of selected user"
        keywords="posts"
      />

      <Container className="py-5">
        <ReturnButton />
        {posts.map(({ id, title, body }) => {
          return (
            <Card key={id} className="mb-3 shadow">
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default UsersPosts;
