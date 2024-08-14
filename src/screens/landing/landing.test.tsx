// import { render } from "@testing-library/react";
import Landing from ".";
import { renderWithProviders } from "../../helpers/test-helper";

describe("rendering landing page", () => {
  test("show landing page", () => {
    const { container } = renderWithProviders(<Landing />);
    expect(container).toMatchSnapshot();
  });
});

