
import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
    const [ inputValue, setInputValue ] = useState('One punch');
    
    const onInputChange = (event) => {
        console.log("el evento es: ",event.target.value);
        //setInputValue('Hola mundo');
        setInputValue(event.target.value);
        
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        if (inputValue.trim().length <= 1 ) return;
        console.log('hola mundo desde on submit , input value is: ',inputValue);
        //setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }


  return (
    <form onSubmit={(event)=> {onSubmit(event)}} aria-label="form">   
    <input type="text"
        placeholder='buscar gif'
        value = {inputValue}
        onChange ={(event) => onInputChange(event)}
    />
    
    </form>
       
    
  )
}

AddCategory.prototypes = {
  onNewCategory:PropTypes.func.isRequired,
}