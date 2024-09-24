import { Component } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-choix-etablissement',
  standalone: true,
  imports: [MatMenu, MatMenuTrigger],
  templateUrl: './choix-etablissement.component.html',
  styleUrl: './choix-etablissement.component.css'
})
export class ChoixEtablissementComponent {

}
