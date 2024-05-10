import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Sanduiche{
    private _bread: Bread;
    private _protein: Protein;
    private _salad: Salad;
    private _sanduicheType: SanduicheType;
    private _sauce: Sauce[] = [];


    public get bread(): Bread {
        return this._bread;
    }
    public set bread(value: Bread) {
        this._bread = value;
    }
    public get protein(): Protein {
        return this._protein;
    }
    public set protein(value: Protein) {
        this._protein = value;
    }
    public get salad(): Salad {
        return this._salad;
    }
    public set salad(value: Salad) {
        this._salad = value;
    }
    public get sanduicheType(): SanduicheType {
        return this._sanduicheType;
    }
    public set sanduicheType(value: SanduicheType) {
        this._sanduicheType = value;
    }
    
    public addSauce(sauce: Sauce){
        this._sauce.push(sauce);
    }
}