import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the jest-dom library

import About from './About';

describe('About Component', () => {
    it('should render the header with the text "Github Finder"', () => {
        render(<About />);

        const headerElement = screen.getByText('Github Finder');

        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toHaveClass('text-6xl mb-4');
    });
});
