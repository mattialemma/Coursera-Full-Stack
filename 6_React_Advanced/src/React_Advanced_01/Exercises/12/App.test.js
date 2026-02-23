import { render, screen } from '@testing-library/react';
import App from './App';

test('renders radio group title', () => {
    render(<App />);
    const titleElement = screen.getByText(/How did you hear about Little Lemon?/i);
    expect(titleElement).toBeInTheDocument();
});
