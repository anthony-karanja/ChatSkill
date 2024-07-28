import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const DeleteMessage = () => {
  const { id } = useParams();
  const history = useHistory();

  const handleDeleteMessage = async () => {
    try {
      await axios.delete(`/api/delete-message/${id}/`);
      // Handle successful message deletion (e.g., redirect to room detail or home)
      history.push('/');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <button onClick={handleDeleteMessage}>Delete Message</button>
    </div>
  );
};

export default DeleteMessage;
