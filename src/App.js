import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chat from './components/Chat'
import Login from './components/Login';
function App() {

const [user,setUser] = useState(null);


  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login/>
        ): (
<>
      
<Header/>
<div className='app_body'>
<Sidebar/>
{/* Switch checks the current route and renders the matching route */}
<Switch>
  <Route path='/room/:roomId'>
    <Chat/>
  </Route>
</Switch>
</div>
</>
        )}
</Router>
   </div>
  );
}

export default App;
