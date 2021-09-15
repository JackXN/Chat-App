import React from "react";
import "../Styles/SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "../firebase";

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {/* /if the icon exists display */}
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title}</h3>/
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption_hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
