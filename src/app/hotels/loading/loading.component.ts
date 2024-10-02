import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit{
  showFirstParagraph = true;
  showSecondParagraph = false;
  showPopup = false;

  ngOnInit() {
    // Afficher le premier paragraphe pendant 3 secondes
    setTimeout(() => {
      this.showFirstParagraph = false;
      this.showSecondParagraph = true;

      // Afficher le deuxième paragraphe pendant 3 secondes
      setTimeout(() => {
        this.showSecondParagraph = false;
        this.showPopup = true;
      }, 5000);
    }, 5000);
  }

}
