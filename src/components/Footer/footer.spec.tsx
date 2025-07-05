import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/utils";

import "@testing-library/jest-dom";
import Footer from ".";

describe("Footer", () => {
  it("should render correctly", () => {
    renderWithTheme(<Footer />);

    expect(screen.getByTitle("Lacrei Saúde")).toBeInTheDocument();
  });
});
