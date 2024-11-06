import React, { useState } from 'react'

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
        console.log('input value is: ',inputValue);
        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }


  return (
    <form onSubmit={(event)=> {onSubmit(event)


    }}>   
    <input type="text"
        placeholder='buscar gif'
        value = {inputValue}
        onChange ={(event) => onInputChange(event)}
    />
    
    </form>
       
    
  )
}

