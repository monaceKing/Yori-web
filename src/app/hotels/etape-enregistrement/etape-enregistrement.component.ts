import { Component, ChangeDetectionStrategy} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-etape-enregistrement',
  standalone: true,
  imports: [
    MatCardModule,MatIcon, RouterLink
  ],
  templateUrl: './etape-enregistrement.component.html',
  styleUrl: './etape-enregistrement.component.css'
})
export class EtapeEnregistrementComponent {
}
