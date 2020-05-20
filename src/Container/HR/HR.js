import React, { Component } from 'react';
import './HR.css';
import Header from '../../Component/Header/Header';
import Footer from '../Footer/Footer'

class HR extends Component{

    state = {
        HRMonitor :{
            name:"HR Monitor",
            icon : "fa fa-users"
        },
        HRTransaction :{
            name:"HR Transaction",
            icon : "fa fa-calculator"
        },
        HRDashboard :{
            name:"HR Dashboard",
            icon : "fa fa-pencil-square-o"
        }

    }

    render(){

        let HRItem = this.state;
        let newArray = [];

        for(let key in HRItem){
            newArray.push({
                id:key,
                config:HRItem[key]
            })
        }
        
        var data = newArray.map((el)=>{
            return <div key={el.id} className="HRbox">
               {el.config.name}
               <div className="innerBox">
               <i icon="envelope" color="#6DB65B" className={["Inputicon",[el.config.icon]].join(' ')} />
                </div>
            </div>
        })

        return(
            <>
            <Header/>
            <div className="Hr">
                {data}
           </div>
           <Footer/>
           </>
        );
    }
}

export default HR;

   
