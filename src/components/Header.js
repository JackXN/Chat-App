import React from "react";
import "../Styles/Header.css";
import {Avatar} from '@material-ui/core';
import { AccessTime } from "@material-ui/icons";
import { Search } from "@material-ui/icons";
import { HelpOutline } from "@material-ui/icons";
import {useStateValue} from '../StateProvider';
import Logo from '../Assets/Images/logo-final@2x.png'


function Header() {
  const [ { user } ] = useStateValue();

// console.log(user)

  return (
    <div className="header">
      <div className="header_left">
<img src={Logo} alt='InvisibleNode'/>
<h2>Invisible <span>Node</span></h2>
      </div>
      <div className="header_right">
         <HelpOutline/>
      </div>
    </div>
  );
}

export default Header;
