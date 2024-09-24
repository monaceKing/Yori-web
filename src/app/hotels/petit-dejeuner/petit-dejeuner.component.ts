import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-petit-dejeuner',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatRadioModule,
    FormsModule,
    MatDivider,
    MatChipsModule,
    CommonModule,
    MatIcon
  ],
  templateUrl: './petit-dejeuner.component.html',
  styleUrl: './petit-dejeuner.component.css'
})
export class PetitDejeunerComponent {
  // breakfastServed: string | undefined;
  // breakfastIncluded: string | undefined;
  // favoriteSeason: string | undefined;
  // seasons: string[] = ['Oui', 'Non'];
  // seasons2: string[] = ['Oui, il est inclus.', 'Non, il est en supplément.'];

  breakfastServed: string | undefined;
  breakfastIncluded: string | undefined;

  // Liste des types de petit-déjeuner
  breakfastTypes: string[] = [
    'A la carte',
    'Africain',
    'Americain',
    'Asiatique',
    'Buffet',
    'Petit déjeuner à emporter',
    'Continental',
    'Végétalien',
    'Casher',
    'Végétarien',
    'Sans gluten',
    'Halal',
    'Anglais / irlandais complet'
  ];

  // Liste des indices où un retour à la ligne est souhaité
  lineBreakIndices: number[] = [4, 8]; // Les indices après "Buffet" et "Casher"
}
