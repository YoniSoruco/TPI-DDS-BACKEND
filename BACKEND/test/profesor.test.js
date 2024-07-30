import request from 'supertest';



describe("Pruebas para la API de profesores", () => {

    // FALTA GetById - Delete
    it("Debe crear un nuevo profesor", async () => {
        const newInscripcion = {
            id: 1,
            nombre: "Juan", 
            apellido: "Guzman", 
            fecha_contratacion: "2024-05-03", 
            id_departamento: 1 , 
            salario: 20530.02, 
            telefono: "3512538954"
        };

        const res = await request("localhost:3000")
            .post("/profesores")
            .send(newProfesor);

        expect(res.statusCode).toEqual(201);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toHaveProperty("id");
        expect(res.body.descripcion).toEqual(newProfesor.descripcion);
    });

    it("Debe responder con una lista de profesores", async () => {
        const res = await request("localhost:3000").get("/profesores");

        expect(res.statusCode).toEqual(200);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toBeInstanceOf(Array);
    });

    it("Debe responder con un profesor de id = 1", async ()=>{
        //Vamos a buscar el profesor con id = 1
        const res = await request("localhost:3000").get("/profesores/1");

        expect(res.statusCode).toEqual(200);
    });

    it("Debe actualizar profesores", async () => {
        

        const updatedProfesor = {
            id: 1,
            nombre: "Juan", 
            apellido: "Guzman", 
            fecha_contratacion: "2024-05-03", 
            id_departamento: 3 , 
            salario: 20530.02, 
            telefono: "3512538954"
        };

        const res = await request("localhost:3000")
            .put("/profesores/1")
            .send(updatedProfesor);
        expect(res.statusCode).toEqual(200);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        
    });

    it("Debe eliminar el profesor de id = 3", async()=>{
        const res = await request("localhost:3000").delete("/profesores/3")

        expect(res.statusCode).toEqual(204);
    });

    
});
