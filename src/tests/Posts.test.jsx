import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Posts from '../components/Posts';
import '@testing-library/jest-dom';

describe('TEST NEWS', () => {
  test('Posts has title', () => {
    render(<Posts />);
    const titleElement = screen.getByText(/post/i);
    expect(titleElement).toBeInTheDocument();
  });
  test('Posts has links', async () => {
    render(
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    );
    const link = await screen.findAllByTestId('link');
    expect(link.length > 1);
  });
});
