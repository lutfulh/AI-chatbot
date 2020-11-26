import React from "react";
import helpdesk from "../../assets/images/helpdesk.jpeg";

const Landing = () => {
  return (
    <div>
      <h1>Metropolia Helpdesk</h1> 
      <img src={helpdesk} style={{ width: "35%" }} alt="helpdesk" />
    </div>
  );
};

export default Landing;
