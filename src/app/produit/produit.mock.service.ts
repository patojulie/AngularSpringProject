import { Injectable } from "@angular/core";
import { Produit } from "../shared/produit";

@Injectable()
export class ProduitMockService{
    private PRODUITS:Produit[] = [];
    constructor(){
        let p1 : Produit = new Produit('Livre',50,20);
        let p2 : Produit = new Produit('cahier',50,10);
        let p3 : Produit = new Produit('gomme',500,30);
        let p4 : Produit = new Produit('crayon',150,20);

        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);
        this.PRODUITS.push(p4);
    }
    public getProduit():Produit[]{
        return this.PRODUITS;
    }


}