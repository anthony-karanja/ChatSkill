import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/user-profile/${id}/`);
        setUser(response.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.username}</h1>
      <h2>Rooms</h2>
      <ul>
        {user.rooms.map((room) => (
          <li key={room.id}>{room.name}</li>
        ))}
      </ul>
      <h2>Messages</h2>
      <ul>
        {user.messages.map((message) => (
          <li key={message.id}>{message.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
