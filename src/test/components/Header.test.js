import React from 'react';
//testing components.
//check jsx that is returned - requires react-test-renderer

//shallow rendering is ideal for static components with no props or interaction.
//https://reactjs.org/docs/shallow-renderer.html
import ReactShallowRenderer from 'react-test-renderer/shallow';

//snapshots could also be suitable here.
import Header from '../../components/Header';
test('render header', ()=>{
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />)
    const result = renderer.getRenderOutput();

    //checks for parent element, a header.
    expect(result.type).toBe('header');
});

