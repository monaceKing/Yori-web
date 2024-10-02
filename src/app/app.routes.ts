import { RouterModule, Routes } from '@angular/router';
import { Acceuil1Component } from './acceuil1/acceuil1.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { PageErrorComponent } from './core/components/page-error/page-error.component';
import { AuthLayoutComponent } from './core/components/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/components/layouts/main-layout/main-layout.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './core/components/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ClientLayoutComponent } from './core/components/layouts/client-layout/client-layout.component';
import { Espace1Component } from './hotels/espace1/espace1.component';
import { ListeEtablissementsComponent } from './hotels/liste-etablissements/liste-etablissements.component';
import { ChoixEtablissementComponent } from './etablissements/choix-etablissement/choix-etablissement.component';
import { EtablissementLayoutComponent } from './core/components/layouts/etablissement-layout/etablissement-layout.component';
import { AjoutEtablissementComponent } from './core/components/layouts/ajout-etablissement/ajout-etablissement.component';
import { FormInfoGeneralesComponent } from './hotels/form-info-generales/form-info-generales.component';
import { FormLocalisationComponent } from './hotels/form-localisation/form-localisation.component';
import { FormCaracteristiqueComponent } from './hotels/form-caracteristique/form-caracteristique.component';
import { FormRegleConditionsComponent } from './hotels/form-regle-conditions/form-regle-conditions.component';
import { FormTarifsComponent } from './hotels/form-tarifs/form-tarifs.component';
import { FormPhotosComponent } from './hotels/form-photos/form-photos.component';
import { StepperComponent } from './core/components/stepper/stepper.component';
import { ProgressionComponent } from './core/components/progression/progression.component';
import { Progression2Component } from './core/components/progression2/progression2.component';
import { Progression3Component } from './core/components/progression3/progression3.component';
import { Progression4Component } from './core/components/progression4/progression4.component';
import { LoadingComponent } from './hotels/loading/loading.component';

export const routes: Routes =  [
    {
      path: '',
      component: MainLayoutComponent,
      children: [
        { path: '', component: Acceuil1Component }, // Route par défaut
        { path:'home', component:HomeComponent}
        // Ajoutez d'autres routes nécessitant le header1 et footer ici
      ]
    },
    {
      path: '',
      component: AuthLayoutComponent,
      children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent},
        { path: 'choix-etablissement', component: ChoixEtablissementComponent},
        // Ajoutez d'autres routes nécessitant pas le header et footer ici
      ]
    },
    {
      path: '',
      component: ClientLayoutComponent,
      children: [
        { path: 'espace1', component: Espace1Component },
        { path: 'list', component: ListeEtablissementsComponent },

        // Ajoutez d'autres routes nécessitant le header2 et footer ici
      ]
    },

    {
      path: '',
      component: AjoutEtablissementComponent,
      children: [
        { path: 'ajout-hotel', component:ProgressionComponent},
        { path: 'info-hotel', component: Progression2Component},
        { path: 'enregistrement-hotel', component: Progression3Component},
        { path: 'finalisation', component: Progression4Component},
        // Ajoutez d'autres routes nécessitant le header3 et footer ici
      ]
    },

    { path:'loading', component: LoadingComponent},

    { path: '**', component: PageErrorComponent } // Redirige pour les routes inconnues
  ];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserModule
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
