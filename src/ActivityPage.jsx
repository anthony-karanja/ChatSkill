import  { useEffect, useState } from 'react';
import axios from 'axios';

const ActivityPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/activity-page/');
        setMessages(response.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <h1>Activity</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityPage;
