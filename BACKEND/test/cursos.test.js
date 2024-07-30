import request from 'supertest';

describe("Pruebas para la API de cursos", () => {

    it("Debe crear un nuevo curso", async () => {
        const newCurso = {
            nombre: "Introducción a la Programación con Python",
            descripcion: "Aprende los fundamentos de la programación utilizando Python, uno de los lenguajes más populares y versátiles.",
            fecha_inicio: "2024-07-01",
            fecha_fin: "2024-09-01",
        };

        const res = await request("localhost:3000")
            .post("/cursos")
            .send(newCurso);

        expect(res.statusCode).toEqual(201);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toHaveProperty("id");
    });

    it("Debe responder con una lista de cursos", async () => {
        const res = await request("localhost:3000").get("/cursos");

        expect(res.statusCode).toEqual(200);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toBeInstanceOf(Array);
    });

    it("Debe responder con un curso de id = 1", async () => {
        // Vamos a buscar el curso con id = 1
        const res = await request("localhost:3000").get("/cursos/1");

        expect(res.statusCode).toEqual(200);
    });

    it("Debe crear un nuevo curso", async () => {
        const newCurso = {
            nombre: "Introducción a la Programación con Python",
            descripcion: "Aprende los fundamentos de la programación utilizando Python, uno de los lenguajes más populares y versátiles.",
            fecha_inicio: "2024-07-01",
            fecha_fin: "2024-09-01",
        };

        const res = await request("localhost:3000")
            .post("/cursos")
            .send(newCurso);

        expect(res.statusCode).toEqual(201);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toHaveProperty("descripcion", "Aprende los fundamentos de la programación utilizando Python, uno de los lenguajes más populares y versátiles.");
    });

    it("Debe responder con una lista de cursos", async () => {
        const res = await request("localhost:3000").get("/cursos");

        expect(res.statusCode).toEqual(200);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
        expect(res.body).toBeInstanceOf(Array);
    });

    it("Debe responder con un curso cuyo descripcion = 'Aprende los fundamentos de la programación utilizando Python, uno de los lenguajes más populares y versátiles.'", async () => {
        const descripcion = "Aprende los fundamentos de la programación utilizando Python, uno de los lenguajes más populares y versátiles.";
        const res = await request("localhost:3000").get(`/cursos/${encodeURIComponent(descripcion)}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("descripcion", descripcion);
    });
    // debe crear un curso y lo buscamos por descripcion
    it("Debe actualizar un curso", async () => {
        const descripcion = "Aprende los fundamentos de la programación utilizando Python, uno de los lenguajes más populares y versátiles.";
        const updatedCurso = {
            nombre: "Introducción a la Programación con Python - Actualizado",
            descripcion: descripcion,
            fecha_inicio: "2024-07-15",
            fecha_fin: "2024-09-15",
        };

        const res = await request("localhost:3000")
            .put(`/cursos/${encodeURIComponent(descripcion)}`)
            .send(updatedCurso);
        
        expect(res.statusCode).toEqual(200);
        expect(res.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
    });

    it("Debe eliminar el curso cuyo descripcion = 'Descubre cómo aprovechar las plataformas digitales para promocionar productos y servicios de manera efectiva.'", async () => {
        const descripcion = "Descubre cómo aprovechar las plataformas digitales para promocionar productos y servicios de manera efectiva.";
        const res = await request("localhost:3000").delete(`/cursos/${encodeURIComponent(descripcion)}`);

        expect(res.statusCode).toEqual(204);
    });
});