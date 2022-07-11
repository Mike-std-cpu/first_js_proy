const Ajolonauta = require("./../app/ajolonauta");
const  AjoHero = require("./../app/ajoHero");

describe("Caso de prueba 1 de clase Ajolonauta", () => {
    test('creacion de clase Ajolonauta', () => {
        const ajo = new Ajolonauta("Ajo", "Node Js Mission");
        const ajo2 = new Ajolonauta("Woopa", "Java Mission");

        expect(ajo.name).toBe("Ajo");
        expect(ajo.course).toBe("Node Js Mission")
        expect(ajo2.name).toBe("Woopa");
        expect(ajo2.course).toBe("Java Mission");
    })
})

describe("Caso de pruebas de Ajolotes super heroes", () => {
    test('Caso de pruebas 2 de clase Ajolonauta', () => {
        const ironman = new AjoHero("Tony Stark","Iron Ajo","Woppa");

        expect(ironman.hero).toBe("Iron Ajo");
        expect(ironman.realName).toBe("Woppa");
        expect(ironman.name).toBe("Tony Stark");
    })
})
