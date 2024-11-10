/**
 * @jest-environment jsdom
 */


import { render, screen } from "@testing-library/react";
import {GifGrid} from '../../components/GifGrid';
import React from 'react';
import { useFetchGifs } from "../../components/hooks/useFetchGifs";

jest.mock('../../components/hooks/useFetchGifs')





describe('Pruebas en <GifGrid />', () => {
    const category ='One Punch';
    
    test('debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        })
        render (<GifGrid category={category}/>);
        //screen.debug();
        expect(screen.getByText('Cargando...'));
        expect (screen.getByText(category));
      
    });

    test('debe de mostrar itemas cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url:'https://localhost/saitama.jpg'
        }, {        
        id: '123',
        title: 'Goku',
        url:'https://localhost/saitama.jpg'
        }        
        ]

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:false
        })
        render (<GifGrid category={category}/>);
        screen.debug();
        console.log('hola bebe, las images items are: ');
        console.log(screen.getAllByRole('img').length);
        expect(screen.getAllByRole('img').length).toBe(2);
      
    })
    


    
  
})
