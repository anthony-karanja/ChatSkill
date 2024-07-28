import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`/api/home-room/${id}/`);
        setRoom(response.data.room);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchRoom();
  }, [id]);

  if (!room) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{room.name}</h1>
      <p>{room.description}</p>
      <h2>Messages</h2>
      <ul>
        {room.messages.map((message) => (
          <li key={message.id}>{message.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoomDetail;
