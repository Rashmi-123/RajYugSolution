import React from 'react';
import './Navbar.css';
import NavigationItem from '../NavigationItem/NavigationItem';


const navigationItems = (props) =>{

    let role =sessionStorage.getItem("username");

    return(
    <ul className="NavigationItems"> 
        <NavigationItem link="/admin/dashboard" active>HR</NavigationItem> 
        {role === "Admin" ? 
        <NavigationItem link="/finance"> Finance </NavigationItem> :
        <NavigationItem link="/finance" disable='disabled-link'> Finance </NavigationItem> }
        <NavigationItem link="/inventory"> Inventory </NavigationItem> 
        <NavigationItem link="/settings"> Settings </NavigationItem>
    </ul>)
};

export default navigationItems;