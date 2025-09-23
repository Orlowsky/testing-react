import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test('Greet component renders Hello', () => {
  render(<Greet />);
  const helloElement = screen.getByText(/Hello/i);
  expect(helloElement).toBeInTheDocument();
})