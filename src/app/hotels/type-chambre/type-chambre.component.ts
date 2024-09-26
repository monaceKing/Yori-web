import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardTitle, MatCardHeader, MatCardContent, MatCardTitleGroup, MatCardSubtitle } from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatLabel, MatHint, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-type-chambre',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatIcon,
    MatRadioGroup,
    MatRadioButton,
    MatDivider,
    MatSelectModule,
    MatCardTitleGroup,

  ],
  templateUrl: './type-chambre.component.html',
  styleUrl: './type-chambre.component.css'
})
export class TypeChambreComponent implements OnInit{
  constructor(){}

  productquantity:number = 0;

  ngOnInit(): void {

  }

  quantity(value: string) {
    if (value === 'max') {
      this.productquantity += 1; // Incrémente
    } else if (value === 'min' && this.productquantity > 1) {
      this.productquantity -= 1; // Décrémente uniquement si productquantity > 1
    }
  }


  options = [
    { value: 'Simple', viewValue: 'Simple' },
    { value: 'Double', viewValue: 'Double' },
    { value: 'Jumeaux', viewValue:'Lits Jumeaux'},
    { value: 'JumeauxDouble', viewValue:'Lit(s) jumeaux/Double'},
    { value: 'Triple', viewValue:'Triple'},
    { value: 'Quatriple', viewValue:'Quatriple'},
    { value: 'Suite', viewValue:'Suite'},
    { value: 'ChambreKing', viewValue:'Chambre King'},
    { value: 'ChambreQueen', viewValue:'Chambre Queen'},
    { value: 'ChambreStandard', viewValue:'Chambre Standard'},
    { value: 'ChambreLuxe', viewValue:'Chambre Luxe'},
    { value: 'LitDoctoire', viewValue:'Lit en Doctoir'},
    { value: 'Familiale', viewValue:'Familiale'},
    { value: 'Studio', viewValue:'Studio'},
    { value: 'Appartement', viewValue:'Appartement'},
    { value: 'Doctoir', viewValue:'Doctoir'},

  ];

}