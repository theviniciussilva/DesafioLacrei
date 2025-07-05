// src/components/Header/header.spec.tsx
import { render, screen } from "@testing-library/react";
import Header from "./index";
import { useRouter } from "next/router";
import { renderWithTheme } from "@/utils/utils";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Header", () => {
  it("shoul render", () => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
      pathname: "/",
    });

    renderWithTheme(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
