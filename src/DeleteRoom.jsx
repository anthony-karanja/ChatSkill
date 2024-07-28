import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const DeleteRoom = () => {
  const { id } = useParams();
  const history = useHistory();

  const handleDeleteRoom = async () => {
    try {
      await axios.delete(`/api/delete-room/${id}/`);
      // Handle successful room deletion (e.g., redirect to home)
      history.push('/');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <button onClick={handleDeleteRoom}>Delete Room</button>
    </div>
  );
};

export default DeleteRoom;
