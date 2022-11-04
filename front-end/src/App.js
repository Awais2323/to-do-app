import { useEffect, useState } from 'react';
import './App.css';
import { Login } from './components/Login/Login';
import { Task } from './components/Task/Task';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  console.log(token);

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [localStorage.getItem('token')])

  return (
    <>
      {
        token ?
        <Task setToken={setToken} /> :
        <Login setToken={setToken} />  

      }
    </>
  );
}

export default App;
