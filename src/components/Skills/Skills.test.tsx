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

  test("renders login button when user is not logged in", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Log in to start learning" });
    expect(loginButton).toBeInTheDocument();
  })

  test("start learning button is not rendered when user is not logged in", () => {
    render(<Skills skills={skills} />);
    //queryByRole - returns null if element is not found
    //use when you want to check that an element is not in the document
    //all sufixes are same - get, query, find and are Role, LabelText, PlceholderText, Text, DisplayValue, AltText, Title, TestId
    const startLearningButton = screen.queryByRole("button", { name: "Start Learning" });
    expect(startLearningButton).not.toBeInTheDocument();
  })
});

//pierwszy argunment to textMatch - string lub regex, funkcja lub obiekt
//screen.getByText(/html/i) - regex
//screen.getByText((content, element) => content.startsWith("H"))

