import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-tarif-hebergement',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatIcon,
    MatDivider
  ],
  templateUrl: './tarif-hebergement.component.html',
  styleUrl: './tarif-hebergement.component.css'
})
export class TarifHebergementComponent {

}
