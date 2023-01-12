import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="linkedin__icon"
        />
        <div className="header__search">
          {/* searchicon */}
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption
          avatar="https://media-exp1.licdn.com/dms/image/C5603AQFw-Hf2ydH9QQ/profile-displayphoto-shrink_800_800/0/1659755310583?e=1670457600&v=beta&t=-Oh_6TlQbDOJtljHn93j6poVIOgTEkT5reG3EG6OczA"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
