import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("check app page", () => {
  test("check username", () => {
    render(<App />);
    const inputField = screen.getByTestId("usernameInput");
    userEvent.type(inputField, "suhas");
    expect(inputField).toHaveValue("suhas");
  });

  test("check email", () => {
    render(<App />);
    const inputField = screen.getByTestId("emailInput");
    userEvent.type(inputField, "Tanmoy");
    expect(inputField).toHaveValue("Tanmoy");
  });
});

  it("check submit button", () => {
    render(<App />);
    const inputuserName = screen.getByTestId("emailInput");
    userEvent.type(inputuserName, "Tanmoy");
    const inputemail = screen.getByTestId("usernameInput");
    userEvent.type(inputemail, "Suneel");
    const button = screen.getByTestId("submit");
    fireEvent.click(button);
    // const listItem=screen.getBtTestId("0")
    
    // expect(listItem).toBeInTehDocument()
  });
