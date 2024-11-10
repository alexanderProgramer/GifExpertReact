/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render,screen} from '@testing-library/react'
import { GifItem } from '../../components/GifItem';
window.React = React;
const title ='Saitma';
const url = 'https://one-punch.com/saitma.jpg';

describe(' Pruebas en <GifItem/>', () => {
    test('debe hacer match con el snapshot', ()=>{
        const { container } = render( <GifItem title={title} url={url}/>  );
        expect ( container ).toMatchSnapshot();

    });

    test('debe mostrar la imagan con el URL y el ALT indicado', () => {


      render( <GifItem title={title} url={url}/>  );
      //screen.debug();
      expect(screen.getByRole('img').src).toBe(url);
      expect(screen.getByRole('img').alt).toBe(title);
      /*const { src, alt} = screen.getByRole('img');
      expect(src).toBe(url);
      expect(alt).toBe(title);*/

    })
    
    test('debe de mostrar el titulo del componente', () => {
        render( <GifItem title={title} url={url}/>  );
        expect (screen.getByText(title)).toBeTruthy();
      
    })
    
  
})
