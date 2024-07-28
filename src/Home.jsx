import  { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [topics, setTopics] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchTopicsAndRooms = async () => {
      try {
        const response = await axios.get('/api/home-topic/');
        setTopics(response.data.topics);
        setRooms(response.data.rooms);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchTopicsAndRooms();
  }, []);

  return (
    <div>
      <h1>Topics</h1>
      <div className='nav'>
        <input 
            type="text" 
                placeholder='Search for rooms' />
      </div>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>{topic.name}</li>
        ))}
      </ul>
      <h1>Rooms</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
