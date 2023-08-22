import React from "react";
import "./header.css";
import Hulupic from "./242-2424140_hulu-png-logo-hulu-logo-white-png-removebg-preview (1).png";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineFlashOn, MdLiveTv, MdVideoLibrary } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
function Header() {
  return (
    <div className="header">
      <div className="header_icons">
        <div className="header_icon header_icon--active">
          <AiFillHome className="ics" />
          <p>Home</p>
        </div>
        <div className="header_icon">
          <MdOutlineFlashOn className="ics" />
          <p>Trending</p>
        </div>
        <div className="header_icon">
          <MdLiveTv className="ics" />
          <p>Verified</p>
        </div>
        <div className="header_icon">
          <MdVideoLibrary className="ics" />
          <p>Collections</p>
        </div>
        <div className="header_icon">
          <AiOutlineSearch className="ics" />
          <p>Search</p>
        </div>
        <div className="header_icon">
          <BsPersonFill className="ics" />
          <p>Account</p>
        </div>
      </div>
      <img src={Hulupic} alt="" />
    </div>
  );
}

export default Header;
