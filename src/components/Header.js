import React from "react";
import "../Styles/Header.css";
import {Avatar} from '@material-ui/core';
import { AccessTime } from "@material-ui/icons";
import { Search } from "@material-ui/icons";
import { HelpOutline } from "@material-ui/icons";
import {useStateValue} from '../StateProvider';



function Header() {
  const [ { user } ] = useStateValue();

console.log(user)

  return (
    <div className="header">
      <div className="header_left">
        <Avatar
        className='header-avatar'
        src={user?.photoURL}
        alt={user?.displayName}/>
        <AccessTime/>
      </div>
      <div className="header_search">
        <Search/>
        <input placeholder='Search Jack Rigan'/>
      </div>
      <div className="header_right">
         <HelpOutline/>
      </div>
    </div>
  );
}

export default Header;
