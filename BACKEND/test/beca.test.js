import request from 'supertest';

import sequelize from '../backend/data/database.js';

describe("Pruebas para la API de becas", () => {

    it("Debe crear una nueva beca", async () => {
        const newBeca = {
            
            nombre: "Beca Bicentenario",
            descripcion: "Estas becas fomentan la educación en carreras de ciencias aplicadas, naturales, exactas y tecnológicas",
            monto: "$ 45.000",
            fecha_inicio: "15-03-2024", 
            fecha_fin: "15-03-2025",
            
        };

        const res = await request("localhost:3000")
            .post("/becas")
            .send(newBeca);

        expect(res.statusCode).toEqual(201);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toHaveProperty("id");
        expect(res.body.nombre).toEqual(newBeca.nombre);
    });

  it("Debe responder con una lista de becas", async () => {
    const res = await request("localhost:3000").get("/becas");

    expect(res.statusCode).toEqual(200);
    expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
    expect(res.body).toBeInstanceOf(Array);
  });

  // FALTA GetById

  it("Debe responder con una beca de id = 0", async ()=>{
    //Vamos a buscar la beca con id = 0
    const res = await request("localhost:3000").get("/becas/0");

    expect(res.statusCode).toEqual(200);
});

  it("Debe actualizar una beca con id = 4", async () => {
        
  
    const updatedBeca = {
        
        nombre: "Beca de la Fundación",
        descripcion: "Estas becas están dirigidas a estudiantes latinoamericanos que desean realizar estudios de posgrado en España",
        monto: "$ 55.000",
        fecha_inicio: "09-06-2024", 
        fecha_fin: "09-06-2025",
        
    };

    const res = await request("localhost:3000")
        .put("/becas/4")
        .send(updatedBeca);
    expect(res.statusCode).toEqual(200);
    expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
    
});

  it("Debe eliminar la beca de id = 9", async()=>{
    const res = await request("localhost:3000").delete("/becas/9")

    expect(res.statusCode).toEqual(204);
});
});
