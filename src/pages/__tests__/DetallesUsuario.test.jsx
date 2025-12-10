import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer, { updateUser } from "../../redux/userSlice";
import DetallesUsuario from "../DetallesUsuario";
import { MemoryRouter } from "react-router-dom";

// Mock del Menu
jest.mock("../../components/Menu", () => () => <div>Menu</div>);

// Mock del Header
jest.mock("../../components/Header", () => ({ title }) => <h1>{title}</h1>);

// Mock de alert
window.alert = jest.fn();

test("Se renderizan los campos y permite actualizar el usuario", () => {
    const initialState = {
        user: {
            name: "Usuario Original",
            avatar: "http://imagen-original.com/avatar.jpg",
        },
    };

    const store = configureStore({
        reducer: {
            user: userReducer,
        },
        preloadedState: initialState,
    });

    render(
        <Provider store={store}>
            <MemoryRouter>
                <DetallesUsuario />
            </MemoryRouter>
        </Provider>
    );

    // Título
    expect(screen.getByText("Configuración del Usuario")).toBeInTheDocument();

    // Inputs
    const nameInput = screen.getByDisplayValue("Usuario Original");
    const avatarInput = screen.getByDisplayValue("http://imagen-original.com/avatar.jpg");

    expect(nameInput).toBeInTheDocument();
    expect(avatarInput).toBeInTheDocument();

    // Cambiar el nombre
    fireEvent.change(nameInput, { target: { value: "Nuevo Nombre" } });
    expect(nameInput.value).toBe("Nuevo Nombre");

    // Cambiar avatar
    fireEvent.change(avatarInput, { target: { value: "http://nuevo-avatar.com/img.jpg" } });
    expect(avatarInput.value).toBe("http://nuevo-avatar.com/img.jpg");

    // Clic en el botón Guardar
    const button = screen.getByText("Guardar cambios");
    fireEvent.click(button);

    // Revisar que se haya llamado alert
    expect(window.alert).toHaveBeenCalledWith("Datos guardados");

    // Verificar que Redux recibió el updateUser
    const updatedState = store.getState().user;

    expect(updatedState.name).toBe("Nuevo Nombre");
    expect(updatedState.avatar).toBe("http://nuevo-avatar.com/img.jpg");
});