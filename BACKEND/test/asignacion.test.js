import request from 'supertest';

describe("Pruebas para la API de asignaciones", () => {

    it("Debe crear una nueva asignacion", async () => {
        const newAsignacion = {
            id: 1,
            id_profesor: 1 , 
            id_curso: 2 , 
            fecha_asignacion: "2021.04-02"
        };

        const res = await request("localhost:3000")
            .post("/asignaciones")
            .send(newAsignacion);

        expect(res.statusCode).toEqual(201);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toHaveProperty("id");
        expect(res.body.nombre).toEqual(newAsignacion.nombre);
    });

  it("Debe responder con una lista de asignaciones", async () => {
    const res = await request("localhost:3000").get("/asignaciones");

    expect(res.statusCode).toEqual(200);
    expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
    expect(res.body).toBeInstanceOf(Array);
  });

  // FALTA GetById

  it("Debe responder con una asignacion de id = 1", async ()=>{
    //Vamos a buscar la asignacion con id = 1
    const res = await request("localhost:3000").get("/asignaciones/1");

    expect(res.statusCode).toEqual(200);
});

  it("Debe actualizar una asignacion con id = 4", async () => {
        

    const updatedAsignacion = {
        id: 1,
        id_profesor: 1 , 
        id_curso: 2 , 
        fecha_asignacion: "2021-04-02"
        
    };

    const res = await request("localhost:3000")
        .put("/asignaciones/4")
        .send(updatedAsignaciones);
    expect(res.statusCode).toEqual(200);
    expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
    
});

  it("Debe eliminar la asignacion de id = 9", async()=>{
    const res = await request("localhost:3000").delete("/asignacion/9")

    expect(res.statusCode).toEqual(204);
});
});
