import React, { useState, useEffect } from 'react'
//import { getGifs } from '../helpers/getGifs';
import {GifItem} from '../components/GifItem';
import {useFetchGifs} from '../components/hooks/useFetchGifs';
import ProptTypes from 'prop-types';

export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category);
    console.log(images, isLoading);
    //  const [images, setImages] = useState([]);
    //  console.log('initial images' , images)

    //  const getImages = async() => {
    //     console.log('in getImages category is: ', category)
    //     const newImages = await getGifs(category);
    //     console.log('newImages are: ', newImages)
    //     setImages(newImages);
    //  }
    
    // useEffect( ()=>{
    //     //getGifs(category).then(newImages => setImages(newImages));
    //     console.log('entry to use effect')
    //     getImages();

    //  }, []);
     

  return (
    <>
      <h3>{category}</h3>
        {
             isLoading && (<h2>Cargando...</h2>)
        }
       

     <div className="card-grid" >
       {
           images.map((image) => (
              <GifItem key={image.id}
              {...image}       
             
              />

            ))
                
        }
     </div>
      
    </>
  )
}

GifGrid.ProptTypes = {
  category:ProptTypes.string.isRequired,
}


