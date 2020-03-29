import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/women/70.jpg"
        alt="My profile"
      />
      <div>
        <h4 className="name">Li Yun</h4>
        <div className="status">
          <div className="status-online"></div>
          <h4 className="status-text">online</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
