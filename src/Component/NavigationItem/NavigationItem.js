import React from 'react';
import './NavigationItem.css';
import { NavLink } from 'react-router-dom';


const navigationItem = (props) =>{
    
    let item = null;
    if(props.disable){
        item =<li className="NavigationItem">
        <NavLink to={props.link} exact
        className = {props.disable}
        >{props.children}</NavLink>
    </li>;
    }else{
        item =<li className="NavigationItem">
        <NavLink to={props.link} exact
        activeClassName = "active"
        >{props.children}</NavLink>
    </li>;
    }
    return item;
   
};

export default navigationItem;