const { render, screen } = require("@testing-library/react");
import "@testing-library/jest-dom";
import Contact from "../components/Contact";

test("Should load Contact Component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
