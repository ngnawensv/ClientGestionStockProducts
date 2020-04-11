import { Produit } from '../shared/produit';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProduitMockService {

    private produits: Produit[] = [];
    constructor() {
        this.produits=[
            {
                reference: "ref1",
                quantite: 10,
                prixunitaire: 100.0
            },
            {
                reference: "ref2",
                quantite: 20,
                prixunitaire: 105.0
            },
            {
                reference: "ref3",
                quantite: 40,
                prixunitaire: 155.0
            }
        ]
    }

    getProduits():Produit[]{
        return this.produits

    }
        
}