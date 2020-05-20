import React, { Component } from 'react';
import "./Header.css"
import NavigationItems from '../Navbar/Navbar';
import AdminSection from '../AdminSection/AdminSection';


class Header extends Component{
    render(){
        return(
            <>
            <div className = "adminsec">
                <AdminSection />
            </div>
           <div className="Header">
              <NavigationItems />
            </div>
           </>
        );
    }
}

export default Header;

   
