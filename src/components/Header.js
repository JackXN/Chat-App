import React from "react";
import "../Styles/Header.css";
import {Avatar} from '@material-ui/core';
import { AccessTime } from "@material-ui/icons";
import { Search } from "@material-ui/icons";
import { HelpOutline } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <Avatar
        className='header-avatar' alt='Jack Rigan' src=''/>
       
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
