import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from ".";
import { renderWithTheme } from "@/utils/utils";



describe("Button", () => {
  it("should render correctly", () => {
    renderWithTheme(<Button />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

});
