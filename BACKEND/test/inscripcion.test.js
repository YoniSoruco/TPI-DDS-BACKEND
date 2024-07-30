import request from 'supertest';



describe("Pruebas para la API de inscripciones", () => {

    // FALTA GetById - Delete
    it("Debe crear una nueva inscripción", async () => {
        const newInscripcion = {
            id_estudiante: 1,
            id_curso: 1,
            fecha_inscripcion: "2023-01-01",
            descripcion: "Inscripción de Prueba"
        };

        const res = await request("localhost:3000")
            .post("/inscripciones")
            .send(newInscripcion);

        expect(res.statusCode).toEqual(201);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toHaveProperty("id");
        expect(res.body.descripcion).toEqual(newInscripcion.descripcion);
    });

    it("Debe responder con una lista de inscripciones", async () => {
        const res = await request("localhost:3000").get("/inscripciones");

        expect(res.statusCode).toEqual(200);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toBeInstanceOf(Array);
    });

    it("Debe responder con una inscripcion de id = 1", async ()=>{
        //Vamos a buscar la inscripcion con id = 1
        const res = await request("localhost:3000").get("/inscripciones/1");

        expect(res.statusCode).toEqual(200);
    });

    it("Debe actualizar una inscripción", async () => {
        

        const updatedInscripcion = {
            id_estudiante: 1,
            id_curso: 1,
            fecha_inscripcion: "2023-01-02",
            descripcion: "Inscripción Actualizadaa"
        };

        const res = await request("localhost:3000")
            .put("/inscripciones/1")
            .send(updatedInscripcion);
        expect(res.statusCode).toEqual(200);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        
    });

    it("Debe eliminar la inscripcion de id = 3", async()=>{
        const res = await request("localhost:3000").delete("/inscripciones/3")

        expect(res.statusCode).toEqual(204);
    });

    
});
