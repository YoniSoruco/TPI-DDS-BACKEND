import request from 'supertest';



describe("Pruebas para la API de estudiantes becados", () => {

   
    it("Debe crear una nueva beca", async () => {
        const newEstudianteBecado = {
            id_estudiante: 1,
            id_curso: 11,
            fecha_inscripcion: "2011-01-01",
            
        };

        const res = await request("localhost:3000")
            .post("/estudiantesbecados")
            .send(newEstudianteBecado);

        expect(res.statusCode).toEqual(201);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toHaveProperty("id");
        ;
    });

    it("Debe responder con una lista de estudiantes becados", async () => {
        const res = await request("localhost:3000").get("/estudiantesbecados");

        expect(res.statusCode).toEqual(200);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toBeInstanceOf(Array);
    });

    it("Debe responder con un estudiante becado de id = 1", async ()=>{
        //Vamos a buscar la inscripcion con id = 1
        const res = await request("localhost:3000").get("/estudiantesbecados/1");

        expect(res.statusCode).toEqual(200);
    });

    it("Debe actualizar un estudiante becado", async () => {
        

        const updatedEstudianteBecado = {
            id_estudiante: 100,
            id_curso: 1,
            fecha_inscripcion: "2023-01-02",
            
        };

        const res = await request("localhost:3000")
            .put("/estudiantesbecados/1")
            .send(updatedEstudianteBecado);
        expect(res.statusCode).toEqual(200);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        
    });

    it("Debe eliminar al estudiante becado de id = 3", async()=>{
        const res = await request("localhost:3000").delete("/estudiantesbecados/3")

        expect(res.statusCode).toEqual(204);
    });

    
});
