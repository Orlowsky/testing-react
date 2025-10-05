import {render,screen,fireEvent} from '@testing-library/react';
import { CounterTwo } from './CounterTwo';
import user from '@testing-library/user-event';

describe('CounterTwo', () => {
    test('renders correctly with initial count', () => {
        render(<CounterTwo count={5} />);
        expect(screen.getByText('Count: 5')).toBeInTheDocument();
    });
    test( 'handlers are called on button clicks', async () => {
        user.setup()
        const incrementMockHandle = jest.fn();
        const decrementMockHandle = jest.fn();
        render(
        <CounterTwo 
        count={0} 
        handleIncrement={incrementMockHandle} 
        handleDecrement={decrementMockHandle} 
        />);
        const incrementButton = screen.getByText('Increment');
        const decrementButton = screen.getByText('Decrement');
        await user.click(incrementButton);
        await user.click(decrementButton);
        expect(incrementMockHandle).toHaveBeenCalledTimes(1);
        expect(decrementMockHandle).toHaveBeenCalledTimes(1);
    })


})

// w ten sposob testujemy czy komponent sie renderuje i czy przyciski dzialaja
// nie testujemy logiki zwiazanej z licznikiem, bo ta jest w hooku useCounter