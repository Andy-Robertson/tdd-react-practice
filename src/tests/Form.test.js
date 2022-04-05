import Form from "../Components/Form";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Form component", () => {
  it("is rendered on screen", () => {
    render(<Form />);

    const form = screen.getByRole("form");

    expect(form).toBeInTheDocument();
  });

  it("has a form element label rendered with the text `name`", () => {
    render(<Form />);

    const loginLabel = screen.getByLabelText(/name/i);

    expect(loginLabel).toBeInTheDocument();
  });

  it("has a form element label rendered with the text `email`", () => {
    render(<Form />);

    const emailLabel = screen.getByLabelText(/email/i);

    expect(emailLabel).toBeInTheDocument();
  });

  it("has a button rendered with `Submit` text", () => {
    render(<Form />);

    const submitButton = screen.getByRole("button", { name: /Submit/i });
    expect(submitButton).toBeInTheDocument();
    // expect(submitButton.textContent).toBe("Submit");
  });

  const onSubmitHandler = jest.fn();

  it("onSubmit is called", () => {
    render(<Form onSubmit={onSubmitHandler} />);

    userEvent.click(screen.getByRole("button", { name: /Submit/i }));
    expect(onSubmitHandler).toHaveBeenCalled();
  });

});