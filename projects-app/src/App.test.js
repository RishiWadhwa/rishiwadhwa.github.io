import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the projects page", () => {
  render(<App />);
  expect(screen.getByText("Projects")).toBeInTheDocument();
  expect(screen.getByText("Project Name 2")).toBeInTheDocument();
  expect(screen.getByText("Leave")).toBeInTheDocument();
});
