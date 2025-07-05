import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/utils";

import "@testing-library/jest-dom";
import Card from ".";

describe("Card", () => {
  it("should render correctly", () => {
    renderWithTheme(<Card />);

    const card = screen.getByRole("card");
    expect(card).toBeInTheDocument();
  });

});