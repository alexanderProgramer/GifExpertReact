import { useState } from 'react';

//import {AddCategory} from './components/AddCategory';
//import { GifGrid } from './components/GifGrid';
import {AddCategory, GifGrid}  from './components';
const GifExpertApp = () => {
  const [categories, setCategories] = useState(['one Punch']);
  console.log(categories);

  const onAddCategory = (newCategory)=> {
    console.log(newCategory);  
  
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);

  }
  return (
    <>
      <h1>GIF EXPERT APP</h1>
      <AddCategory 
      //setCategories={setCategories}
        onNewCategory={event => onAddCategory(event) }
      
      />
      <p>rafc is command for in visual create a new component!!! </p>
      <button onClick={ onAddCategory}>agregar</button>
      <ol>
        {categories.map((category) =>  (
              <GifGrid key = {category} category={category}/>)  
        )}
        
      </ol>
    </>
  )
}

export default GifExpertApp;