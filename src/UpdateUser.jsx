import { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/update-user/');
        setUsername(response.data.username);
        setEmail(response.data.email);
        setBio(response.data.bio);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchUser();
  }, []);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/api/update-user/', { username, email, bio });
      console.log(response.data);
      // Handle successful user update (e.g., redirect to user profile)
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleUpdateUser}>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Bio</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateUser;
