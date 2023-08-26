import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useFetchAlbums } from '../hooks/api/dataFetchHooks';
import Meta from '../components/Meta';
import ReturnButton from '../components/ReturnButton';

const UsersAlbums = () => {
  const { userId } = useParams();
  const { data, error, isLoading } = useFetchAlbums(userId);

  if (error) {
    return (
      <h1 className="text-danger d-flex justify-content-center align-items-center vh-100">
        {error}
      </h1>
    );
  }

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <>
      <Meta
        title="User&#39;s Albums"
        description="View albums of selected user"
        keywords="albums"
      />

      <Container className="py-5">
        <ReturnButton />
        <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-3">
          {data.map(({ id, title }) => (
            <Col key={id}>
              <Card className="h-100 shadow scaling-card">
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default UsersAlbums;
