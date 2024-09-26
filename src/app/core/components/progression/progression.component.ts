import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { FormCaracteristiqueComponent } from '../../../hotels/form-caracteristique/form-caracteristique.component';
import { FormLocalisationComponent } from '../../../hotels/form-localisation/form-localisation.component';
import { FormPhotosComponent } from '../../../hotels/form-photos/form-photos.component';
import { FormRegleConditionsComponent } from '../../../hotels/form-regle-conditions/form-regle-conditions.component';
import { FormTarifsComponent } from '../../../hotels/form-tarifs/form-tarifs.component';
import { FormInfoGeneralesComponent } from "../../../hotels/form-info-generales/form-info-generales.component";
import { NomStructureComponent } from "../../../hotels/nom-structure/nom-structure.component";
import { CommoditesComponent } from "../../../hotels/commodites/commodites.component";
import { PetitDejeunerComponent } from "../../../hotels/petit-dejeuner/petit-dejeuner.component";
import { ParkingComponent } from "../../../hotels/parking/parking.component";
import { MatIcon } from '@angular/material/icon';
import { LanguesComponent } from "../../../hotels/langues/langues.component";
import { PolitiqueComponent } from "../../../hotels/politique/politique.component";
import { EtapeEnregistrementComponent } from "../../../hotels/etape-enregistrement/etape-enregistrement.component";
import { TypeChambreComponent } from "../../../hotels/type-chambre/type-chambre.component";
import { SalleBainComponent } from "../../../hotels/salle-bain/salle-bain.component";
import { EquipementsComponent } from "../../../hotels/equipements/equipements.component";
import { TarifHebergementComponent } from "../../../hotels/tarif-hebergement/tarif-hebergement.component";
import { PhotoCategorieComponent } from "../../../hotels/photo-categorie/photo-categorie.component";
import { ImagesEtablissementComponent } from "../../../hotels/images-etablissement/images-etablissement.component";
import { GoogleMapComponent } from "../../../hotels/google-map/google-map.component";
import { PaiementComponent } from "../../../hotels/paiement/paiement.component";
import { ASavoirComponent } from "../../../hotels/a-savoir/a-savoir.component";

@Component({
  selector: 'app-progression',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    MatTabsModule,
    FormLocalisationComponent,
    FormCaracteristiqueComponent,
    FormRegleConditionsComponent,
    FormTarifsComponent,
    FormPhotosComponent,
    MatProgressBar,
    CommonModule,
    FormInfoGeneralesComponent,
    NomStructureComponent,
    CommoditesComponent,
    PetitDejeunerComponent,
    ParkingComponent,
    MatIcon,
    LanguesComponent,
    PolitiqueComponent,
    EtapeEnregistrementComponent,
    TypeChambreComponent,
    SalleBainComponent,
    EquipementsComponent,
    TarifHebergementComponent,
    PhotoCategorieComponent,
    ImagesEtablissementComponent,
    GoogleMapComponent,
    PaiementComponent,
    ASavoirComponent
],
  templateUrl: './progression.component.html',
  styleUrl: './progression.component.css'
})
export class ProgressionComponent implements  AfterViewInit{

  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  activeTabIndex: number = 0;

  ngAfterViewInit() {
    setTimeout(() => {
      this.selectTab(this.activeTabIndex);
    });
  }

  onTabChange(event: any) {
    this.activeTabIndex = event.index;
    localStorage.setItem('activeTabIndex', this.activeTabIndex.toString());
  }

  selectTab(index: number) {
    this.activeTabIndex = index;
    localStorage.setItem('activeTabIndex', index.toString());
  }

  previousTab() {
    if (this.tabGroup) {
      const currentIndex = this.tabGroup.selectedIndex;
      if (currentIndex !== null && currentIndex > 0) {
        this.selectTab(currentIndex - 1);
      }
    }
  }

  nextTab() {
    if (this.tabGroup) {
      const currentIndex = this.tabGroup.selectedIndex;
      if (currentIndex !== null && this.tabGroup._tabs.length > 0 && currentIndex < this.tabGroup._tabs.length - 1) {
        this.selectTab(currentIndex + 1);
      }
    }
  }

}