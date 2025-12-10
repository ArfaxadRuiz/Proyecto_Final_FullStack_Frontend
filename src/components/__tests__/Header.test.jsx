import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../redux/userSlice";
import Header from "../Header";

// Mock del Link para evitar el error de react-router-dom
jest.mock("react-router-dom", () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

test("se renderiza el título correctamente", () => {

  const store = configureStore({
    reducer: { user: userReducer }
  });

  render(
    <Provider store={store}>
      <Header title="Página de Prueba" />
    </Provider>
  );

  expect(screen.getByText("Página de Prueba")).toBeInTheDocument();
});