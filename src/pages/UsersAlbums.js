import { Card, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import $ from 'jquery';

const UsersAlbums = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    $.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .done((data) => {
        setAlbums(data);
      })
      .fail(() => {
        console.error('Failed to fetch');
      });
  }, [userId]);

  return (
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
  );
};

export default UsersAlbums;
