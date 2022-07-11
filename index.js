const Ajolonauta = require("././app/ajolonauta");
const AjoHero = require("././app/ajoHero");

const woopa = new Ajolonauta("Woopa");
console.log(`¡Hola! mi nombre es ${woopa.name}`);

//Test 2 aprobado
const ironman = new AjoHero("Tony Stark","Iron Ajo","Woppa");
 console.log(`Soy ${ironman.realName} e interpreto a ${ironman.name} como ${ironman.hero}`);