import { render, screen } from "@testing-library/react";
import Card from "../Card";

test("renderiza correctamente la Card con sus props", () => {
    
    render(
        <Card
            title="God of War"
            img="fake-image.jpg"
            consoleName="PS5"
            owned="both"
            status="ok"
        />
    );

    // 1. Título
    expect(screen.getByText("God of War")).toBeInTheDocument();

    // 2. Imagen
    const image = screen.getByAltText("God of War");
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toBe("fake-image.jpg");

    // 3. Consola
    expect(screen.getByText("PS5")).toBeInTheDocument();

    // 4. Tipo de formato (owned)
    expect(screen.getByText("Físico y Digital")).toBeInTheDocument();

    // 5. Estatus
    const dot = document.querySelector(".dot.ok");
    expect(dot).not.toBeNull();
});