import Button from "../Components/Button";

import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// Using TDD, write a react component with a button that displays a number, starting with 0.

// The number should increase by 1 every time you click the button.
// Once that works, modify your component so that after 3 it cycles back to 0 again

describe("Button component", () => {
  it("renders on page", () => {
    render(<Button />);

    const buttonId = screen.getByTestId("button");

    expect(buttonId).toBeTruthy();
  });

  it("displays the number '0' as the default placeholder button text", () => {
    render(<Button />);

    const buttonLabel = screen.queryByText(0); // experimented, not concise though??

    expect(buttonLabel).toBeInTheDocument();
  });

  it("displays a count equal to 1 after the button has been clicked once", () => {
    render(<Button />);
    const buttonId = screen.getByTestId("button");

    fireEvent.click(buttonId);

    expect(Number(buttonId.innerHTML)).toBe(1);
  });

    it("displays a count equal to 2 after the button has been clicked twice", () => {
      render(<Button />);
      const buttonId = screen.getByTestId("button");

      fireEvent.click(buttonId);
      fireEvent.click(buttonId);

      expect(Number(buttonId.innerHTML)).toBe(2);
    });
});
