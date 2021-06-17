import React from "react";
import PropTypes from "prop-types";


export const Alert = ({ alert, closeAlert }) => {
  const handleClick = () => {
    console.log("ccclick");
    closeAlert();
  };

  Alert.propTypes = {
    closeAlert: PropTypes.func.isRequired,
  };

  const alertStyle = {
    float: "right",
    cursor: "pointer",
    color: "red",
    fontSize: "1.2em",
  };

  return (
    alert != null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i> {alert.msg}
        <p style={alertStyle} onClick={handleClick}>
          <i className="fas fa-times-circle"></i>
        </p>
      </div>
    )
  );
};
