import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import { ASavoirComponent } from '../../../hotels/a-savoir/a-savoir.component';
import { CommoditesComponent } from '../../../hotels/commodites/commodites.component';
import { EquipementsComponent } from '../../../hotels/equipements/equipements.component';
import { EtapeEnregistrementComponent } from '../../../hotels/etape-enregistrement/etape-enregistrement.component';
import { FormCaracteristiqueComponent } from '../../../hotels/form-caracteristique/form-caracteristique.component';
import { FormInfoGeneralesComponent } from '../../../hotels/form-info-generales/form-info-generales.component';
import { FormLocalisationComponent } from '../../../hotels/form-localisation/form-localisation.component';
import { FormPhotosComponent } from '../../../hotels/form-photos/form-photos.component';
import { FormRegleConditionsComponent } from '../../../hotels/form-regle-conditions/form-regle-conditions.component';
import { FormTarifsComponent } from '../../../hotels/form-tarifs/form-tarifs.component';
import { ImagesEtablissementComponent } from '../../../hotels/images-etablissement/images-etablissement.component';
import { LanguesComponent } from '../../../hotels/langues/langues.component';
import { NomStructureComponent } from '../../../hotels/nom-structure/nom-structure.component';
import { PaiementComponent } from '../../../hotels/paiement/paiement.component';
import { ParkingComponent } from '../../../hotels/parking/parking.component';
import { PetitDejeunerComponent } from '../../../hotels/petit-dejeuner/petit-dejeuner.component';
import { PhotoCategorieComponent } from '../../../hotels/photo-categorie/photo-categorie.component';
import { PolitiqueComponent } from '../../../hotels/politique/politique.component';
import { SalleBainComponent } from '../../../hotels/salle-bain/salle-bain.component';
import { TarifHebergementComponent } from '../../../hotels/tarif-hebergement/tarif-hebergement.component';
import { TypeChambreComponent } from '../../../hotels/type-chambre/type-chambre.component';
import { ProprietaireComponent } from "../../../hotels/proprietaire/proprietaire.component";

@Component({
  selector: 'app-progression3',
  standalone: true,
  imports: [
    MatTab,
    MatTabGroup,
    MatTabsModule,
    MatProgressBar,
    CommonModule,
    MatIcon,
    ImagesEtablissementComponent,
    PaiementComponent,
    ASavoirComponent,
    RouterOutlet,
    EtapeEnregistrementComponent,
    ProprietaireComponent
],
  templateUrl: './progression3.component.html',
  styleUrl: './progression3.component.css'
})
export class Progression3Component implements  AfterViewInit{

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
