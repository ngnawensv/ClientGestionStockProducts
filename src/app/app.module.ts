import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitMockService } from './produit/produit-mock-service';
import { UtilisateurComponent } from './Utilisateur/utilisateur.component';
import { UtilisateurService } from './Utilisateur/utilisateur-mock-service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    UtilisateurComponent,
    SidebarComponent,
    ContentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProduitMockService,UtilisateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
