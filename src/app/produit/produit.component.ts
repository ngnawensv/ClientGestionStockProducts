import { Component, OnInit } from '@angular/core';
import { Produit } from '../shared/produit';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProduitServiceService } from './produit-service.service';
@Component({
    selector: 'app-produit',
    templateUrl: './produit.component.html',
    styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

    produits: Produit[];

    produitForm: FormGroup;

    constructor(private produitService: ProduitServiceService, private formBluider: FormBuilder) {
        this.produitForm = this.formBluider.group({
            reference: ['', Validators.required],
            quantite: '',
            prixunitaire: ''
        });

    }

    ngOnInit() {
        this.listeProduits();
    }

    listeProduits() {
        this.produitService.getProduits().subscribe(
            data => {
                this.produits=data;
                console.log(data);
            }
        )   
     }

}