/**
 * @jest-environment jsdom
 */
import { render, renderHook, waitFor,screen } from "@testing-library/react"
import { useFetchGifs } from "../../components/hooks/useFetchGifs"


describe('Pruebas en el hook use FetchGifs ', () => {
    test('debe regresar el estado inicial  ', () => {
        console.log('epera evaluate use fetch Gifs')
      const { result } = renderHook( () => useFetchGifs('One Punch'));
      const { images, isLoading} = result.current;
      expect (images.length).toBe(0);
      expect(isLoading).toBeTruthy();
    });

    test('debe de retornar un arreglo de imagenes y isLoading enfalse  ', async () => {
      const { result } = renderHook( () => useFetchGifs('One Punch'));
      await waitFor(
        () => expect(result.current.images.length).toBeGreaterThan(0),
      );
      console.log(' debug get gifs');
      //screen.debug();

      const { images, isLoading} = result.current;
      expect(images.length).toBeGreaterThan(1);
      expect(isLoading).toBeFalsy();


    })
    
    
    
  
})
