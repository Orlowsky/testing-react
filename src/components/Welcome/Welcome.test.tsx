import { render, screen } from "@testing-library/react";
import { Welcome } from "./Welcome";

test("Welcome component renders Welcome without name", () => {
  render(<Welcome />);
  const welcomeElement = screen.getByText(/Welcome/i);
  expect(welcomeElement).toBeInTheDocument();
})

test("Welcome component renders Welcome name", () => {
  render(<Welcome name={"Martin"}/>);
  const welcomeElement = screen.getByText(/Welcome Martin/i);
  expect(welcomeElement).toBeInTheDocument();
})