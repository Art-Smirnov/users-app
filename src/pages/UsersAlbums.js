import { Card, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useFetchAlbums } from '../hooks/api/dataFetchHooks';
import React from 'react';

const UsersAlbums = () => {
  const { userId } = useParams();
  const { albums, albumsError, isAlbumsLoading } = useFetchAlbums(userId);

  if (albumsError) {
    return (
      <h1 className="d-flex justify-content-center align-items-center vh-100">
        {albumsError}
      </h1>
    );
  }

  if (isAlbumsLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>User&#39;s Albums</title>
        <meta name="description" content="View albums of selected user" />
        <meta name="keywords" content="albums" />
      </Helmet>

      <Container className="py-5">
        <Row xs={1} md={2} lg={3} xl={4} className="g-3">
          {albums.map(({ id, title }) => {
            return (
              <Card key={id} className="shadow">
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default UsersAlbums;
