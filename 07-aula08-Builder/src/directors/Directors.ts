import SanduicheBuilder from "../builders/SanduicheBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director{
    constructor(private builder: SanduicheBuilder){}

    ConstructXSalada(){
        this.builder.setSanduicheType(SanduicheType.XSALADA);
        this.builder.setBread(new Bread ("Pão de Hamburguer"));
        this.builder.setProtein(Protein.BOVINO);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.addSauces(new Sauce ("Maionese e Ketchup"));        
    }

    ConstructXFrango(){
        this.builder.setSanduicheType(SanduicheType.XFRANGO);
        this.builder.setBread(new Bread ("Pão de Hamburguer"));
        this.builder.setProtein(Protein.FRANGO);
        this.builder.setSalad(Salad.TOMATE);
        this.builder.addSauces(new Sauce ("Maionese, Ketchup e Mostarda"));  
    }

    ConstructXEgg(){
        this.builder.setSanduicheType(SanduicheType.XEGG);
        this.builder.setBread(new Bread ("Pão de Hamburguer"));
        this.builder.setProtein(Protein.OVO);
        this.builder.setSalad(Salad.CEBOLA);
        this.builder.addSauces(new Sauce ("Maionese"));
    }

    ConstructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setBread(new Bread ("Pão de Hot Dog"));
        this.builder.setProtein(Protein.SALSICHA);
        this.builder.setSalad(Salad.TOMATE);
        this.builder.addSauces(new Sauce ("Maionese, Ketchup e Mostarde"));
    }
}