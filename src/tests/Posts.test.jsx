import { render, screen } from '@testing-library/react';
import Posts from '../components/Posts';

test('Posts has title', () => {
  render(<Posts />);
  const titleElement = screen.getByText(/post/i);
  expect(titleElement).toBeInTheDocument();
});
