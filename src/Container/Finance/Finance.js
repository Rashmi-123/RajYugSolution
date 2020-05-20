import React, { Component } from 'react';
import './Finance.css';
import Header from '../../Component/Header/Header';
import Footer from '../Footer/Footer';

class HR extends Component{

    state = {
        FinanceMaster :{
            name:"Finance Master",
            icon : "fa fa-users"
        },
        FinanceTransaction :{
            name:"Finance Transaction",
            icon : "fa fa-calculator"
        },
        FinanceDashboard :{
            name:"Finance Dashboard",
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
            return <div key={el.id} className="Financebox">
               {el.config.name}
               <div className="innerBox">
               <i icon="envelope" color="#6DB65B" className={["Inputicon",[el.config.icon]].join(' ')} />
                </div>
            </div>
        })

        return(
            <>
            <Header />
            <div className="Finance">
                {data}
           </div>
           <Footer />
           </>
        );
    }
}

export default HR;

   
