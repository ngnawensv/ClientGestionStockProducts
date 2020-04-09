import { Utilisateur } from '../shared/utilisateur';
import { Injectable } from '@angular/core';

@Injectable()
export class UtilisateurService{

    private UTILISATEURS:Utilisateur[]=[];
    constructor(){
        let u1:Utilisateur=new Utilisateur('NGNAWEN', 'Samuel Vermon','sngnawen@gmail.com');
        let u2:Utilisateur=new Utilisateur('MARE', 'Samuel Vermon','sngnawen@gmail.com');
        let u3:Utilisateur=new Utilisateur('NDINCHOUT', 'Samuel Vermon','sngnawen@gmail.com');
        this.UTILISATEURS.push(u1);
        this.UTILISATEURS.push(u2);
        this.UTILISATEURS.push(u3);

    } 

    public getUtilisateurs():Utilisateur[]{
        return this.UTILISATEURS;
    }

}