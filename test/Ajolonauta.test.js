const Ajolonauta = require("./../app/ajolonauta");

describe("Caso de prueba 1 de clase Ajolonauta", () => {
    test('creacion de clase Ajolonauta', () => {
        const ajo = new Ajolonauta("Ajo", "Node Js Mission");
        const ajo2 = new Ajolonauta("Woopa", "Java Mission");

        expect(ajo.name).toBe("Ajo");
        expect(ajo.course).toBe("Node Js Mission")
        expect(ajo2.name).toBe("Woopa");
        expect(ajo2.course).toBe("Java Mission")
    })
})

// MIn live weekly 3 live 54:02