import Form from "../Components/Form";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Form component", () => {
  it("is rendered on screen", () => {
    render(<Form />);

    const form = screen.getByRole("form");

    expect(form).toBeInTheDocument();
  });
});
