import React from 'react';
import './AdminSection.css';



const AdminSection = (props) => {

  let role =sessionStorage.getItem("username");

 
  return (
    <div className="innerdiv">
      <i icon="envelope" color="#6DB65B" className="Bell fa fa-bell" />
    <div className="user">
      <i icon="envelope" color="#6DB65B" className=" fa fa-user" />
    </div>                     
     <div className=" Admin"> {role} </div>
   </div>
  );
}

export default AdminSection;