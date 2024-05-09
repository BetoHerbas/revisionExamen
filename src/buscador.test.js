import searchProject from "./buscador.js";

describe("buscar", () => {
  it("no encuentra proyectos cuando no se tiene ninguno en la lista de proyectos", () => {
    let proyectos = [];
    expect(searchProject("proyecto1", proyectos)).toEqual([]);
  });
  it("encuentra un proyecto cuando el mismo existe en uan lista de 1 proyecto", () => {
    let proyectos = ["proyecto1"];
    expect(searchProject("proyecto1", proyectos)).toEqual(["proyecto1"]);
  });
  it("encuentra un proyecto cuando el mismo existe en una lista de varios proyectos", () => {
    let proyectos = ["proyecto1", "proyecto2", "proyecto3"];
    expect(searchProject("proyecto2", proyectos)).toEqual(["proyecto2"]);
  });
});
