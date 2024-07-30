import request from 'supertest';



describe("Pruebas para la API de calificaciones", () => {

    it("Debe crear un nuevo Calificacion", async () => {
        const newCalificacion = {
            
            id_examen: 1,
            id_estudiante: 1,
            fecha_calificacion: "2023-01-01",
            calificacion: 5.0
        };

        const res = await request("localhost:3000")
            .post("/calificaciones")
            .send(newCalificacion);

        expect(res.statusCode).toEqual(201);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toHaveProperty("id");
        expect(res.body.descripcion).toEqual(newCalificacion.descripcion);
    });

    it("Debe responder con una lista de calificaciones", async () => {
        const res = await request("localhost:3000").get("/calificaciones");

        expect(res.statusCode).toEqual(200);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toBeInstanceOf(Array);
    });

    it("Debe responder con una calificacion de id = 1", async ()=>{
        //Vamos a buscar la calificacion con id = 1
        const res = await request("localhost:3000").get("/calificaciones/1");

        expect(res.statusCode).toEqual(200);
    });

    it("Debe actualizar un Calificacion", async () => {
        

        const updatedCalificacion = {
            id_estudiante: 1,
            id_curso: 1,
            fecha_inscripcion: "2023-01-02",
            calificacion: 9.0
        };

        const res = await request("localhost:3000")
            .put("/calificaciones/1")
            .send(updatedCalificacion);
        expect(res.statusCode).toEqual(200);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        
    });

    it("Debe eliminar la calificacion de id = 3", async()=>{
        const res = await request("localhost:3000").delete("/calificaciones/3")

        expect(res.statusCode).toEqual(204);
    });

    
});
