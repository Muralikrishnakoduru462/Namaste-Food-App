import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResList.json";
import Body from "../Body";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    }
  })
});


it("Should render the body component with search", async () => {
  await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));


  const cardsBefore = screen.getAllByTestId("resCard");
  expect(cardsBefore.length).toBe(20);

  const searchButton = screen.getByRole("button", { name: "search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchButton);

  const cardsAfter = screen.getAllByTestId("resCard");

  expect(cardsAfter.length).toBe(3);

});

it("Should render the body component with search", async () => {
  await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));


  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByTestId("topRatedButton");
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(1);
});