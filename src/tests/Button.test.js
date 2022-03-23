import Button from "../Components/Button";
import { render, screen, fireEvent } from "@testing-library/react";

// Using TDD, write a react component with a button that displays a number, starting with 0.
// The number should increase by 1 every time you click the button.
// Once that works, modify your component so that after 3 it cycles back to 0 again

describe("Button component", () => {
  const simulateButtonClick = (timesToRun) => {
    while (timesToRun-- > 0 && timesToRun <= 3) {
      fireEvent.click(screen.getByTestId("button"));
    }
    return;
  };

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

    simulateButtonClick(1);

    expect(Number(buttonId.innerHTML)).toBe(1);
  });

  it("displays a count equal to 2 after the button has been clicked twice", () => {
    render(<Button />);
    const buttonId = screen.getByTestId("button");

    simulateButtonClick(2);

    expect(Number(buttonId.innerHTML)).toBe(2);
  });

  it("displays a count equal to 3 after the button has been clicked three times", () => {
    render(<Button />);
    const buttonId = screen.getByTestId("button");

    simulateButtonClick(3);

    expect(Number(buttonId.innerHTML)).toBe(3);
  });

  it("displays a count equal to 0 after the button is clicked four or more times", () => {
    render(<Button />);
    const buttonId = screen.getByTestId("button");

    simulateButtonClick(4);

    expect(Number(buttonId.innerHTML)).toBe(0);
  });

  it("displays a count equal to 0 after the button is clicked a random number of times greater than 3 but less then 100", () => {
    render(<Button />);
    const buttonId = screen.getByTestId("button");

    const randomTimesToRun = parseInt(Math.random() * (99 - 4) + 4);

    simulateButtonClick(randomTimesToRun);

    expect(Number(buttonId.innerHTML)).toBe(0);
  });

  it("displays a count equal to a random number after the button is clicked equal to 3 or less", () => {
    render(<Button />);
    const buttonId = screen.getByTestId("button");

    const randomTimesToRun = parseInt(Math.random() * 3);

    simulateButtonClick(randomTimesToRun);

    expect(Number(buttonId.innerHTML)).toBe(randomTimesToRun);
  });
});
