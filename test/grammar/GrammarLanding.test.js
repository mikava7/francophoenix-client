import { expect } from "chai";
import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom"; // You may need to install this package if not already installed
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; // You may need to install this package if not already installed
import Home from "../../src/pages/home/Home";

describe("Home Component", () => {
  const mockStore = configureStore();
  const initialState = {
    books: {
      books: [], // Replace with sample data if needed
      isLoading: false,
    },
    vocabularyTopics: {
      vocabularyTopics: [], // Replace with sample data if needed
      isLoading: false,
    },
  };

  it("renders loading component when isLoading is true", () => {
    const store = mockStore({
      ...initialState,
      books: {
        ...initialState.books,
        isLoading: true,
      },
    });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );

    const loadingElement = container.querySelector(".loading"); // Replace with the actual loading component class name
    expect(loadingElement).to.exist;
  });

  it("renders books carousel when isLoading is false", () => {
    const store = mockStore(initialState);

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );

    const carouselElement = container.querySelector(".books-carousel"); // Replace with the actual books carousel class name
    expect(carouselElement).to.exist;
  });

  // Add more test cases for different components in the Home component as needed
});
