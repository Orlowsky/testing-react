import { render, screen } from "@testing-library/react";
import { Greet } from "../components/Greet/Greet";

describe.skip("Greet componentt", () => {
  it("renders Hello", () => {
    render(<Greet />);
    const helloElement = screen.getByText(/Hello/i);
    expect(helloElement).toBeInTheDocument();
  });
});

//skip, only mozna uzywac do wybranego testu i do wybranego describe
//it zamiast test - to samo
//tylko dla test uzywa normalnie .test.tsx
