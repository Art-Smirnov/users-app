import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import { Helmet } from 'react-helmet-async';

const UsersPosts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    $.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .done((data) => {
        setPosts(data);
      })
      .fail(() => {
        console.error('Failed to fetch');
      });
  }, [userId]);

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
