import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardFooter, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';
import { MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  // symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, },
  {position: 2, name: 'Helium', weight: 4.0026, },
  {position: 3, name: 'Lithium', weight: 6.941, },
  {position: 4, name: 'Beryllium', weight: 9.0122,},
];

@Component({
  selector: 'app-header2',
  standalone: true,
  imports: [
    RouterLink,
    MatCard,
    MatMenuItem,
    MatCardContent,
    MatCardTitle,
    MatMenu,
    MatIcon,
    MatMenuTrigger,
    MatMenuModule,
    MatButtonModule,
    MatMenuItem,
    MatCardFooter,
    MatDivider,
    MatList,
    MatListItem,
    MatTableModule
    ],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css'
})
export class Header2Component {
  userName = 'Juste Monace'; // Remplacez par le nom réel de l'utilisateur

  logout() {
    // Logique de déconnexion ici
    console.log('Déconnexion');
  }

  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;

}
