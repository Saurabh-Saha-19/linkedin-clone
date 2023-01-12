import React from "react";
import { Avatar } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  const avatar =
    "https://media-exp1.licdn.com/dms/image/C5603AQFw-Hf2ydH9QQ/profile-displayphoto-shrink_800_800/0/1659755310583?e=1670457600&v=beta&t=-Oh_6TlQbDOJtljHn93j6poVIOgTEkT5reG3EG6OczA";

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0t9AZHO5ahv3HGDTLeeHjte6BMOJa1-8dTw&usqp=CAU"
          alt=""
        />
        <Avatar src={avatar} className="sidebar__avatar" />
        <h2>Saurabh Saha</h2>
        <h4>vksaha99340@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,000</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwaredevelopment")}
        {recentItem("design")}
      </div>
    </div>
  );
}

export default Sidebar;
