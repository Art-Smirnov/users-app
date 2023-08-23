import { Card, Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useFetchPosts } from '../hooks/api/dataFetchHooks';
import React from 'react';

const UsersPosts = () => {
  const { userId } = useParams();
  const { posts, postsError, isPostsLoading } = useFetchPosts(userId);

  if (postsError) {
    return (
      <h1 className="d-flex justify-content-center align-items-center vh-100">
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
      <Helmet>
        <title>User&#39;s Posts</title>
        <meta name="description" content="View posts of selected user" />
        <meta name="keywords" content="posts" />
      </Helmet>

      <Container className="py-5">
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
