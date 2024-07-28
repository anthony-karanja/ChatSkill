// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register'
import Home from './Home';
import ActivityPage from './ActivityPage';
import CreateRoom from './CreateRoom';
import DeleteMessage from './DeleteMessage';
import UpdateRoom from './UpdateRoom';
import UpdateUser from './UpdateUser';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/ActivityPage" element={<ActivityPage/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/CreateRoom" element={<CreateRoom/>} />
        <Route path="/DeleteMessage" element={<DeleteMessage/>} />
        <Route path="/DeleteRoom" element={<DeleteMessage/>} />
        <Route path="/UpdateRoom" element={<UpdateRoom/>} />
        <Route path="/UpdateUser" element={<UpdateUser/>} />
      </Routes>
    </Router>
  );
};

export default App;

