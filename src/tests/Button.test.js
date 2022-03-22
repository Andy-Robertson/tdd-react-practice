import Button from "../Components/Button";

import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

describe("Button component", () => {
  it("renders on page", () => {
    render(<Button />);

    const buttonId = screen.getByTestId("button");

    expect(buttonId).toBeTruthy();
  });

  it("displays the number '0' as the default button label", () => {
    render(<Button />);

    const buttonLabel = screen.queryByText(0);

    expect(buttonLabel).toBeInTheDocument();
  });
});
