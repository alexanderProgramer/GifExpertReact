/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react'
import { GifItem } from '../../components/GifItem';
window.React = React;
const title ='Saitma';
const url = 'https://one-punch.com/saitma.jpg';

describe(' Pruebas en <GifItem/>', () => {
    test('debe hacer match con el snapshot', ()=>{
        const { container } = render( <GifItem title={title} url={url}/>  );
        expect ( container ).toMatchSnapshot();

    });
  
})
