import { MatFormField } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { Router, RouterOutlet } from '@angular/router';
import { MatOptgroup, MatOption, MatSelect } from '@angular/material/select';
import { ReservationComponent } from "../components/reservation/reservation.component";
import { EtablissementComponent } from '../components/etablissement/etablissement.component';
import { BoiteReceptionComponent } from "../components/boite-reception/boite-reception.component";
import { CommentairesComponent } from "../components/commentaires/commentaires.component";
import { AnalyseComponent } from "../components/analyse/analyse.component";
import { Footer2Component } from "../../layout/footer2/footer2.component";

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTab,
    MatTabGroup,
    MatTabsModule,
    MatProgressBar,
    CommonModule,
    MatIcon,
    MatFormField,
    MatSelect,
    MatOptgroup,
    MatOption,
    ReservationComponent,
    EtablissementComponent,
    BoiteReceptionComponent,
    CommentairesComponent,
    AnalyseComponent,
    Footer2Component
],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements AfterViewInit{

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  activeTabIndex: number = 0;

  // onTabChange(event: MatTabChangeEvent) {
  //   this.activeTabIndex = event.index;
  //   localStorage.setItem('activeTabIndex', this.activeTabIndex.toString());
  //   this.currentComponent = null; // Réinitialise le composant sélectionné
  // }
  onTabChange(event: any) {
    this.activeTabIndex = event.index;

    // Vérifie si l'onglet actif est celui du menu et si aucune option n'est sélectionnée
    if (this.activeTabIndex === 4 && !this.currentComponent) {
      // Si on veut revenir au menu, on empêche le changement
      event.preventDefault();
      // Optionnel : réactive le dernier onglet
      this.activeTabIndex = event.previousIndex;
    } else {
      this.isMenuOpen = false; // Ferme le menu si on change d'onglet
      this.currentComponent = null; // Réinitialise le composant sélectionné
    }
  }

  selectTab(index: number) {
    this.activeTabIndex = index;
    localStorage.setItem('activeTabIndex', index.toString());
    this.tabGroup.selectedIndex = index;
  }

  previousTab() {
    if (this.activeTabIndex > 0) {
      this.selectTab(this.activeTabIndex - 1);
    }
  }

  nextTab() {
    if (this.activeTabIndex < this.tabGroup._tabs.length - 1) {
      this.selectTab(this.activeTabIndex + 1);
    }
  }
  


  // isMenuOpen = false;
  // currentComponent: string | null = null;

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }

  // showComponent(componentName: string) {
  //   this.currentComponent = componentName;
  //   this.isMenuOpen = false; 
  // }

  // onTabChange2(event: any) {
  //   this.activeTabIndex = event.index;
  // }

  isMenuOpen = false;
  currentComponent: string | null = null;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openSelect(select: HTMLSelectElement) {
    select.focus();
    select.click(); // Ouvre le sélecteur
  }

  showComponent(event: Event) {
    const target = event.target as HTMLSelectElement; // Assurer que target est un HTMLSelectElement
    const value = target.value;

    if (value) {
      this.currentComponent = value;
      this.isMenuOpen = false; 
    }
  }

  onTabChange2(event: any) {
    this.activeTabIndex = event.index;
    this.isMenuOpen = false; // Ferme le menu
    this.currentComponent = null; // Réinitialise le composant sélectionné
  }
  

}
