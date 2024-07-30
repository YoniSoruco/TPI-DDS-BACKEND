import request from 'supertest';



describe("Pruebas para la API de examenes", () => {

    it("Debe crear un nuevo Examen", async () => {
        const newExamen = {
            
            id_curso: 1,
            descripcion: "Examen de Prueba",
            fecha_examen: "2023-01-01",
            duracion: 60
        };

        const res = await request("localhost:3000")
            .post("/examenes")
            .send(newExamen);

        expect(res.statusCode).toEqual(201);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toHaveProperty("id");
        expect(res.body.descripcion).toEqual(newExamen.descripcion);
    });

    it("Debe responder con una lista de examenes", async () => {
        const res = await request("localhost:3000").get("/examenes");

        expect(res.statusCode).toEqual(200);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toBeInstanceOf(Array);
    });

    it("Debe responder con una examen de id = 1", async ()=>{
        //Vamos a buscar la examen con id = 1
        const res = await request("localhost:3000").get("/examenes/1");

        expect(res.statusCode).toEqual(200);
    });

    it("Debe actualizar un Examen", async () => {
        

        const updatedExamen = {
            id_estudiante: 1,
            id_curso: 1,
            fecha_inscripcion: "2023-01-02",
            descripcion: "Examen Actualizadaa"
        };

        const res = await request("localhost:3000")
            .put("/examenes/1")
            .send(updatedExamen);
        expect(res.statusCode).toEqual(200);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        
    });

    it("Debe eliminar la examen de id = 3", async()=>{
        const res = await request("localhost:3000").delete("/examenes/3")

        expect(res.statusCode).toEqual(204);
    });

    
});
