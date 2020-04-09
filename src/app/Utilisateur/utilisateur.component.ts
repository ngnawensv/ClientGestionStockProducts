import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from './utilisateur-mock-service';
import { Utilisateur } from '../shared/utilisateur';

@Component({
    selector:'app-utilisateur',
    templateUrl:'./utilisateur.component.html',
    styleUrls:['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit{

    utilisateurs:Utilisateur[];

    constructor(private utilisateurService:UtilisateurService){

    }

    ngOnInit(){
        this.utilisateurs=this.utilisateurService.getUtilisateurs();


    }

}