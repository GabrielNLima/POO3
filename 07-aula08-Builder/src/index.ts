import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./directors/Directors";
import Sanduiche from "./products/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.ConstructHotDog();
const HOTDOG : Sanduiche = builder.getSanduiche();
console.log("Fazendo pedido...")
console.log("Tipo: " +HOTDOG.sanduicheType)
console.log("Pão: " +HOTDOG.bread.type)
console.log("Proteína: " +HOTDOG.protein)
console.log("Salada: " +HOTDOG.salad)
console.log("Molho: " +HOTDOG.addSauce.length)

director.ConstructXEgg();
const XEGG : Sanduiche = builder.getSanduiche();
console.log("Fazendo pedido...")
console.log("Tipo: " +XEGG.sanduicheType)
console.log("Pão: " +XEGG.bread.type)
console.log("Proteína: " +XEGG.protein)
console.log("Salada: " +XEGG.salad)
console.log("Molho: " +XEGG.addSauce.length)

director.ConstructXSalada();
const XSALADA : Sanduiche = builder.getSanduiche();
console.log("Fazendo pedido...")
console.log("Tipo: " +XSALADA.sanduicheType)
console.log("Pão: " +XSALADA.bread.type)
console.log("Proteína: " +XSALADA.protein)
console.log("Salada: " +XSALADA.salad)
console.log("Molho: " +XSALADA.addSauce.length)

director.ConstructXFrango();
const XFRANGO : Sanduiche = builder.getSanduiche();
console.log("Fazendo pedido...")
console.log("Tipo: " +XFRANGO.sanduicheType)
console.log("Pão: " +XFRANGO.bread.type)
console.log("Proteína: " +XFRANGO.protein)
console.log("Salada: " +XFRANGO.salad)
console.log("Molho: " +XFRANGO.addSauce.length)