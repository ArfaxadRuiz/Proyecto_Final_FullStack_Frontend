import { render, screen, fireEvent } from "@testing-library/react";

// MOCK DE HEADER
jest.mock("../../components/Header", () => () => <div>Mock Header</div>);

// MOCK DE MENU
jest.mock("../../components/Menu", () => () => <div>Mock Menu</div>);

// MOCK DE SCSS
jest.mock("../../styles/main.scss", () => ({}));

import AddGame from "../AddGame";

describe("AddGame Page", () => {

    test("renderiza el formulario correctamente", () => {
        render(<AddGame />);

        expect(screen.getByText("Agregar un nuevo juego")).toBeInTheDocument();
        expect(screen.getByLabelText("Nombre del Juego:")).toBeInTheDocument();
    });

    test("permite escribir el nombre del juego", () => {
        render(<AddGame />);

        const input = screen.getByLabelText("Nombre del Juego:");
        
        fireEvent.change(input, { target: { value: "God of War" } });

        expect(input.value).toBe("God of War");
    });

});