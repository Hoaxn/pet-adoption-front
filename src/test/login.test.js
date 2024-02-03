import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import Login from "../pages/login_test"; // Adjust the path based on your file structure
// Set up matchMedia polyfill
// window.matchMedia = createMatchMedia();

test("renders the login component", () => {
  render(<Login />);
  const textElement = screen.getByText("login_test");
  expect(textElement).toBeInTheDocument();
});
