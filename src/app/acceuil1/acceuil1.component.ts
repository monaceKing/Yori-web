import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { FooterComponent } from '../core/components/footer/footer.component';


@Component({
  selector: 'app-acceuil1',
  standalone: true,
  imports: [
    MatCard,
    MatButtonToggleModule,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatCardFooter,
    FooterComponent
],
  templateUrl: './acceuil1.component.html',
  styleUrl: './acceuil1.component.css'
})
export class Acceuil1Component {

}