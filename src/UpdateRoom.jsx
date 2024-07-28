import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateRoom = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`/api/home-room/${id}/`);
        setName(response.data.room.name);
        setDescription(response.data.room.description);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchRoom();
  }, [id]);

  const handleUpdateRoom = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/update-room/${id}/`, { name, description });
      console.log(response.data);
      // Handle successful room update (e.g., redirect to room detail)
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleUpdateRoom}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Update Room</button>
    </form>
  );
};

export default UpdateRoom;
