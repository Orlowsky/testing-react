import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
    const skills = ["HTML", "CSS", "JavaScript"];
  test("renders correctly Skills component", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();

  });

  test("renders correctly list items based on skills props", () => {
    render(<Skills skills={skills} />);
    //getAllByRole
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
    expect(listItemElements[0]).toHaveTextContent("HTML");
  })
});

//pierwszy argunment to textMatch - string lub regex, funkcja lub obiekt
//screen.getByText(/html/i) - regex
