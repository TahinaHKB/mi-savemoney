import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Components/Authentification/SignIn';
import Login from './Components/Authentification/Login';
import Home from './Components/Home/Home';
import '../src/Components/Historique';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" Component={SignIn} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/" Component={Home} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
