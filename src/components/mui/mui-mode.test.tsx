import {render, screen} from '../../test-utils';
import { MuiMode } from './mui-mode';
/* import { AppProviders } from '../providers/app-providers'; */

describe('MuiMode', () => {
  it('renders the current theme mode', () => {
    render(<MuiMode /> /* { 
        wrapper: AppProviders
    } */);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveTextContent('The current theme mode is dark mode');
    })

})
// custom render function 
// nie potrzeba wrapera bo jest on w test-utils i tam jest custom render