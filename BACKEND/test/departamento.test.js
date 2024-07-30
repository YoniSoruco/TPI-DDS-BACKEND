import request from 'supertest';

describe("Pruebas para la API de departamentos", () => {

    it("Debe crear un nuevo departamento", async () => {
        const newDepartamento = {
            nombre: "Departamento de Agronomia",
            ubicacion: "Edificio Verde",
            fecha_alta: "2024-01-01",
            
        };

        const res = await request("localhost:3000")
            .post("/departamentos")
            .send(newDepartamento);

        expect(res.statusCode).toEqual(201);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toHaveProperty("id");
        expect(res.body.nombre).toEqual(newDepartamento.nombre);
    });

  it("Debe responder con una lista de departamentos", async () => {
    const res = await request("localhost:3000").get("/departamentos");

    expect(res.statusCode).toEqual(200);
    expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
    expect(res.body).toBeInstanceOf(Array);
  });

  // FALTA GetById

  it("Debe responder con un deparamento de id = 1", async ()=>{
    //Vamos a buscar la inscripcion con id = 1
    const res = await request("localhost:3000").get("/departamentos/1");

    expect(res.statusCode).toEqual(200);
});

  it("Debe actualizar una departamento con id = 4", async () => {
        

    const updatedDepartamento = {
        nombre: "Departamento de Aeronautica",
        ubicacion:"Edificio Negro",
        fecha_alta: "2024-06-06",
        
    };

    const res = await request("localhost:3000")
        .put("/departamentos/4")
        .send(updatedDepartamento);
    expect(res.statusCode).toEqual(200);
    expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
    
});

  it("Debe eliminar la departamento de id = 9", async()=>{
    const res = await request("localhost:3000").delete("/departamentos/9")

    expect(res.statusCode).toEqual(204);
});
});
