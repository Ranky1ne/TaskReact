import React from "react";




const Input = (  props: {
    inpType: string,
    placeholder: string,
    inpClName: string,
    divClName: string,
    id: string
} ) =>
 {
   
        return(
           
                       <div className={props.divClName}>
                       <input 
                       type={props.inpType} 
                       placeholder={props.placeholder} 
                       className={props.inpClName} 
                       id={props.id}   
                       />
                       </div>
        )
    }

    Input.defaultProps ={
    inpType: "text",
    placeholder: undefined,
    inpClName: undefined,
    divClName: undefined,
    }

export default Input;