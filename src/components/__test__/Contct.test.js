import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";


describe("contact Us page Test cases", () => {

  //beforeAll(() => {
  //  console.log("hii murali");
  //});

  //beforeEach(() => {
  //  console.log("hii koduru");
  //});

  //afterAll(() => {
  //  console.log("hii murali");
  //});

  //afterEach(() => {
  //  console.log("hii koduruMuralikrishna");
  //});

  it("Test should load us contact", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Test should load button inside  contact", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load input load inside contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("Should load two  input boxes inside contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });

})

