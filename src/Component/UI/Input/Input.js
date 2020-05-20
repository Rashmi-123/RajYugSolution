import React from 'react';
import { Input } from 'reactstrap';
import './Input.css';   

const input = (props) =>{
    let InputClasses = ["inputElement"];
    let validationError = null;
  

    if (props.invalid && props.shouldValidate && props.touched) {
        InputClasses.push("Invalid");
        validationError = <p className="ValidationError">Please enter a valid {props.valueType}</p>;
    }

   
    return(
        <> 
            
             <Input className={InputClasses.join(' ')} type={props.type} 
             name={props.type} 
             id={props.valueType} 
             placeholder={props.valueType}
             onChange={props.changed}
             value={props.value}/>
             {validationError}
            
        </>
        
    )
}

export default input;