import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toBeInTheDocument();
    const icrementButton = screen.getByRole("button", { name: "Increment" });
    expect(icrementButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await userEvent.click(incrementButton);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("1");
  });
  test("renders a count of 2 after clicking the increment button twice", async () => {
    userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await userEvent.dblClick(incrementButton);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking the add amount button", async () => {
    userEvent.setup();
    render(<Counter />);
    const amountInput = screen.getByRole(
      "spinbutton" /* {attribute: { name: 'amount' } } */,
    );
    await userEvent.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const addAmountButton = screen.getByRole("button", { name: "Add Amount" });
    await userEvent.click(addAmountButton);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focused in the right order when tabbing", async () => {
    userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const amountInput = screen.getByRole("spinbutton");
    const addAmountButton = screen.getByRole("button", { name: "Add Amount" });
    await userEvent.tab();
    expect(incrementButton).toHaveFocus();
    await userEvent.tab();
    expect(amountInput).toHaveFocus();
    await userEvent.tab();
    expect(addAmountButton).toHaveFocus();
  });
});

//click,double, tipleClick
//hover, unhover
//clear select deseect
//cut copy paste
//lowerlvl keyboardEvent
//keyboardEvent.keydown
//keyboardEvent.keyup ....
