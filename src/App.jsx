import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import { TodoWrapper } from './components/TodoWrapper';
import './App.css';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tabla" element={<TodoWrapper />} />
        </Routes>
      </Router>
  )
}

export default App
