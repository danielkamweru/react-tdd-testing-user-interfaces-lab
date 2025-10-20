import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange
  render(<App />);

  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /Hi, I'm/i, // case-insensitive match
  });

  // Assert
  expect(topLevelHeading).toBeInTheDocument();
});
