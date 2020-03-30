import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

const Contact = props => {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div>
        <h4 className="name">{props.name}</h4>
        <div className="status">
          <div
            className={props.online ? "status-online" : "status-offline"}
          ></div>
          <h4 className="status-text">{props.online ? "online" : "offline"}</h4>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

export default Contact;
