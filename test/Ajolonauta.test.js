const Ajolonauta = require("./../app/ajolonauta");

describe("Caso de prueba 1 de clase Ajolonauta", () => {
    test('creacion de clase Ajolonauta', () => {
        const ajo = new Ajolonauta("Ajo");
        const ajo2 = new Ajolonauta("Woopa");

        expect(ajo.name).toBe("Ajo");
        expect(ajo2.name).toBe("Woopa");
    })
})
// min 50:34 live 1 weekly 3