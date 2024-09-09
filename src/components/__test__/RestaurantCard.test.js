import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


test("should render restaurant card with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />)

  const name = screen.getByText("Wow! China");
  expect(name).toBeInTheDocument();
})