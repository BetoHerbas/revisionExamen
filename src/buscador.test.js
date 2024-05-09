import searchProject from "./buscador.js";

describe("buscar", () => {
  it("no encuentra proyectos cuando no se tiene ninguno en la lista de proyectos", () => {
    let proyectos = [];
    expect(searchProject("proyecto1", proyectos)).toEqual([]);
  });
});
