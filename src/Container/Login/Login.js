import React, { Component } from 'react';
import {Form, FormGroup} from 'reactstrap';
import Input from '../../Component/UI/Input/Input';
import Button from '../../Component/UI/Button/Button';
import './Login.css';

class Login extends Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            controls:{
                
                Username:{
                    elementType :'input',
                    elementConfig : {
                        type: 'text',
                        placeholder : 'Username'
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched : false
                },
                Password:{
                    elementType :'input',
                    elementConfig : {
                        type: 'password',
                        placeholder : 'password'
                    },
                    value:'',
                    validation:{
                        required:true,
                    },
                    valid:false,
                    touched : false
                }
            },
            formIsvalid:false,
            isSignup : true,
            show: false
        } 
        this.checkvalidity = this.checkvalidity.bind(this);
      }
   

checkvalidity(value, rules){

    let isValid = true;
    
    if(rules.required){
        isValid = value.trim() !== "" && isValid
    }
   return isValid;
}

    InputChangeHandler = (event,inputIdentifier) =>{
        const updatedOrderForm = {
            ...this.state.controls
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
      
        updatedFormElement.valid = this.checkvalidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({controls: updatedOrderForm, formIsValid: formIsValid});
    }

    submitHandler = ( event ) => {
        event.preventDefault();
  
        let username = this.state.controls.Username.value;
        let password = this.state.controls.Password.value;
        
        if(username !== "" && password !== ""){
            if(username === "Admin" || username === "User"){
                sessionStorage.setItem("username", username);
                this.props.history.push({ pathname: '/admin/dashboard'});
            }
        }
   }

    render(){

        let newArray = [];
        for(let key in this.state.controls){
            newArray.push({
                id:key,
                config:this.state.controls[key]
            })
        }

        let formDataArray = <Form onSubmit={this.submitHandler}>
        {newArray.map(el=>{
            return <FormGroup>
            <Input key={el.id} 
                valueType = {el.id}
                elementType={el.config.elementType} 
                elementConfig={el.config.elementConfig} 
                value={el.config.value} 
                invalid={!el.config.valid}
                shouldValidate = {el.config.validation}
                touched = {el.config.touched}
                changed={(event)=>this.InputChangeHandler(event,el.id)}/>
            </FormGroup>
        })}
        <Button disabled={!this.state.formIsValid}>Sign In</Button>
    </Form>;
        return(
            <div className="Login">
            {formDataArray}
            </div>
        )
    }
}

export default Login;