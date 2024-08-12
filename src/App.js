import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Components/Authentification/SignIn';
import Login from './Components/Authentification/Login';
import Home from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={SignIn} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/home" Component={Home} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
