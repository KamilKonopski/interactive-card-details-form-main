import { render, screen } from "@testing-library/react";

import App from "./App";

it("should have a heading text 'Carts Dashboard'", () => {
	render(<App />);
	const headingText = screen.queryByText(/Carts Dashboard/i);
	expect(headingText).toBeVisible();
});
