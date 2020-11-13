import React from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectuser } from './features/userSlice';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase'
function App() {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          username: authUser.displayName
        }));
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch])
  return (
    <div className="app">
      {user ? <>
        <Sidebar />
        <Chat />
      </> : <Login />}
    </div>
  );
}

export default App;
