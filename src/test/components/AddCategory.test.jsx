/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../components";
import React from 'react';

describe('Pruebas en <AddCategory />', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        render (<AddCategory onNewCategory={() => {}}/>);
        screen.debug();
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value:'Saitma'}});
        expect (input.value).toBe('Saitma');
      
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

      const inputValue  = 'Saitma';
      const onNewCategory = jest.fn();
      // TODO : ????
      render (<AddCategory onNewCategory={onNewCategory}/>);
      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');
      fireEvent.input(input, {target:{value: inputValue}});
      fireEvent.submit(form);
      expect( input.value).toBe('');
      //screen.debug();

      expect(onNewCategory).toHaveBeenCalled();
      expect (onNewCategory).toHaveBeenCalledTimes(1);
      expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn();
        render (<AddCategory onNewCategory={onNewCategory}/>);
       const form = screen.getByRole('form');
       fireEvent.submit(form);
       expect(onNewCategory).toHaveBeenCalledTimes(1);
       expect(onNewCategory).toHaveBeenCalled();
      
    })
    
    
    
  
})
