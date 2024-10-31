import { render, screen } from "@testing-library/react";

import App from "./";

test("renders welcome text", () => {
  render(<App />);
  const title = screen.getByText(/Vite Template/i);
  expect(title).toBeInTheDocument();
});
