import { useEffect, useState } from 'react';
import axios from 'axios';

const TopicsPage = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get('/api/topics-page/');
        setTopics(response.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchTopics();
  }, []);

  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>{topic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopicsPage;
