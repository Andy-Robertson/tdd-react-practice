import Button from "../Components/Button";

import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button component", () => {
  it("displays the string 'Dont click me!' as the default button label", () => {
    render(<Button />);

    const buttonLabel = screen.queryByText("Dont click me!");

    expect(buttonLabel).toBeInTheDocument();
  });
});




// describe("ModalCancelBookingScreen component", () => {
// 	it("does not display the modal by default", () => {
// 		render(<ModalCancelBookingScreen booking={{}} refreshBooking={() => {}} />);

// 		const modalTitle = screen.queryByText("Delete Your Booking");

// 		expect(modalTitle).not.toBeInTheDocument();
// 	});
