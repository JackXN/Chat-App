import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chat from './components/Chat'
import Login from './components/Login';
import {useStateValue} from './StateProvider';




function App() {

const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (
         <Login/>
        ): (

<div className='app_wrapper'>
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
</div>
        )}
</Router>
   </div>
  );
}

export default App;
