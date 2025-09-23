import { render, screen } from "@testing-library/react";
import { Greet } from "../components/Greet/Greet";


describe("Greet component", () => { 
  describe("Nested", () => {
    test('renders Hello', () => {
    render(<Greet />);
    const helloElement = screen.getByText(/Hello/i);
    expect(helloElement).toBeInTheDocument();
  })
  })
  
})


//skip, only mozna uzywac do wybranego testu i do wybranego describe