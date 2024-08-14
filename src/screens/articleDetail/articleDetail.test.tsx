import ArticleDetail from ".";
import { renderWithProviders } from "../../helpers/test-helper";

describe("rendering article Detail page", () => {
  test("show article detail page", () => {
    const { container } = renderWithProviders(<ArticleDetail />);
    expect(container).toMatchSnapshot();
  });
});
