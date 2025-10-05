import { render, screen } from "@testing-library/react";
import { Users } from "./Users";

describe("Users", () => {
  test("renders correctly", async () => {
    render(<Users />);
    const headingElement = screen.getByText("Users");
    expect(headingElement).toBeInTheDocument();
  });

  test("fetches and displays users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
    const user1 = await screen.findByText("John Doe");
    const user2 = await screen.findByText("Jane Smith");
    const user3 = await screen.findByText("Alice Johnson");
    expect(user1).toBeInTheDocument();
    expect(user2).toBeInTheDocument();
    expect(user3).toBeInTheDocument();
  });

  test("redners error message on fetch failure", async () => {
    render(<Users shouldFail={true} />);
    const errorMessage = await screen.findByText("Failed to fetch users");
    expect(errorMessage).toBeInTheDocument();
  });
});
