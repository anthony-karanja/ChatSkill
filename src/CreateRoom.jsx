import  { useState } from 'react';
import axios from 'axios';

const CreateRoom = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateRoom = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/create-room/', { name, description });
      console.log(response.data);
      // Handle successful room creation (e.g., redirect to room detail)
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleCreateRoom}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Create Room</button>
    </form>
  );
};

export default CreateRoom;
