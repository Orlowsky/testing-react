import {render, screen} from '@testing-library/react';
import { MuiMode } from './mui-mode';
import { AppProviders } from '../providers/app-providers';

describe('MuiMode', () => {
  it('renders the current theme mode', () => {
    render(<MuiMode />, { 
        wrapper: AppProviders
    });
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveTextContent('The current theme mode is dark mode');
    })

})