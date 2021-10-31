import React from 'react';
//Will retrieve some functions from the React Testing Library
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

const { asFragment } = render(<About />);

expect(asFragment()).toMatchSnapshot();

afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
      render(<About />);
    });
  
    it('matches snapshot DOM node structure', () => {
        // render About
    })
});



