import { ReactComponent as ArrowRightIcon } from '../icons/arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ReturnButton = () => {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate('/');
  };

  return (
    <Button
      className="d-flex align-items-center border-0 mb-3"
      variant="outline-dark"
      onClick={handleReturnClick}
    >
      <ArrowRightIcon />
      <span className="ms-2">Back to Users</span>
    </Button>
  );
};

export default ReturnButton;
