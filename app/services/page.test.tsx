/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("renders the Services heading", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { level: 2, name: "Services" })).toBeInTheDocument();
});
