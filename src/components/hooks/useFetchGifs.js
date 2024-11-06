import {useState,useEffect} from 'react';
import {getGifs} from '../../helpers/getGifs';
export const useFetchGifs = (category) => {

     const [images, setImages] = useState([]);
     const [ isLoading, setIsloading] = useState(true);
     console.log('initial images' , images)

     const getImages = async() => {
        console.log('in getImages category is: ', category)
        const newImages = await getGifs(category);
        //console.log('newImages are: ', newImages)
        setImages(newImages);
        setIsloading(false);
     }
    
    useEffect( ()=>{
        //getGifs(category).then(newImages => setImages(newImages));
        console.log('entry to use effect')
        getImages();

     }, []);

     return {
        images: images,
        isLoading
        
    }

}

