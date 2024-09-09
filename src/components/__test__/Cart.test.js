import RestaurantMenu from "../RestaurantMenu";
import { act, fireEvent } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    }
  })
})

it("should load restaurant Menu component", async () => {
  await act(() => render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
    </BrowserRouter>));

  const accordianHeader = screen.getByText("Recommended(20)");
  fireEvent.click(accordianHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(20);

  const cardItemsBefore = screen.getByText("Cart (0 items)");
  expect(cardItemsBefore).toBeInTheDocument();


  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);


  const cardItemsUpdated1 = screen.getByText("Cart (1 items)");
  expect(cardItemsUpdated1).toBeInTheDocument();

  fireEvent.click(addBtn[1]);
  const cardItemsUpdated2 = screen.getByText("Cart (2 items)");
  expect(cardItemsUpdated2).toBeInTheDocument();

  const foodItemsInCart = screen.getAllByTestId("foodItems");
  expect(foodItemsInCart.length).toBe(22);


  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }))

  const foodItemsInCartClear = screen.getAllByTestId("foodItems");
  expect(foodItemsInCartClear.length).toBe(20);

  expect(screen.getByText("Add Items to the cart!!"));
})