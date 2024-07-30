import request from 'supertest';



describe("Pruebas para la API de estudiantes", () => {

    // FALTA GetById - Delete
    it("Debe crear un nuevo estudiante", async () => {
        const newInscripcion = {
            
            nombre: 'Juan',
            apellido: 'Lopez',
            fecha_nacimiento: "14-03-2002",
            email: "juanl@gmail.com",
            telefono: "3512733838"
        };

        const res = await request("localhost:3000")
            .post("/estudiantes")
            .send(newEstudiante);

        expect(res.statusCode).toEqual(201);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toHaveProperty("id");
        expect(res.body.descripcion).toEqual(newEstudiante.descripcion);
    });

    it("Debe responder con una lista de estudiantes", async () => {
        const res = await request("localhost:3000").get("/estudiantes");

        expect(res.statusCode).toEqual(200);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toBeInstanceOf(Array);
    });

    it("Debe responder con un estudiantes de id = 1", async ()=>{
        //Vamos a buscar la inscripcion con id = 1
        const res = await request("localhost:3000").get("/estudiantes/1");

        expect(res.statusCode).toEqual(200);
    });

    it("Debe actualizar estudiantes", async () => {
        

        const updatedEstudiante = {
            
            nombre: "Juan",
            apellido: "Lopez",
            fecha_nacimiento: "14-03-2002",
            email: "juanl@gmail.com",
            telefono: "3516764992 (nuevo)"
        };

        const res = await request("localhost:3000")
            .put("/estudiantes/1")
            .send(updatedEstudiante);
        expect(res.statusCode).toEqual(200);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        
    });

    it("Debe eliminar el estudiante de id = 3", async()=>{
        const res = await request("localhost:3000").delete("/estudiantes/3")

        expect(res.statusCode).toEqual(204);
    });

    
});
