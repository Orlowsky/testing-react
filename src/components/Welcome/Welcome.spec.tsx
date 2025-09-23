import { render, screen } from "@testing-library/react";
import { Welcome } from "./Welcome";


describe.skip("Welcome component", () => {
test("renders Welcome without name", () => {
  render(<Welcome />);
  const welcomeElement = screen.getByText(/Welcome/i);
  expect(welcomeElement).toBeInTheDocument();
})

test("renders Welcome name", () => {
  render(<Welcome name={"Martin"}/>);
  const welcomeElement = screen.getByText(/Welcome Martin/i);
  expect(welcomeElement).toBeInTheDocument();
})
})


//optionalnie oddzielny describe
//nazwa spec oddzielnie od test

//TYLKO DLA TESTU  NORMALNIE UZYWAMY TEST.TSX