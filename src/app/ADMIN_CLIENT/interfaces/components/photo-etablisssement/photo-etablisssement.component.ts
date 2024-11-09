import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-photo-etablisssement',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './photo-etablisssement.component.html',
  styleUrl: './photo-etablisssement.component.css'
})
export class PhotoEtablissementComponent {
  // Tableau d'images, incluant les 5 images par défaut dans le dossier assets
  images: string[] = [
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
    'assets/img/chambre.png',
  ];

  // Set utilisé pour suivre les images sélectionnées
  selectedImages: Set<number> = new Set();

  @ViewChild('fileInput') fileInput: any; // Référence à l'élément input file

  // Ajouter une image à la galerie
  addImage(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.files) {
      const file = input.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            // Ajouter l'image au tableau des images
            this.images.push(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  }

  // Déclencher l'input file lorsqu'on clique sur le bouton
  triggerFileInput(): void {
    this.fileInput.nativeElement.click(); // Simule un clic sur l'input file caché
  }

  // Sélectionner toutes les images
  selectAll(): void {
    this.selectedImages = new Set(this.images.map((_, index) => index));
  }

  // Désélectionner toutes les images
  deselectAll(): void {
    this.selectedImages.clear();
  }

  // Supprimer les images sélectionnées
  deleteSelected(): void {
    this.images = this.images.filter((_, index) => !this.selectedImages.has(index));
    this.selectedImages.clear();
  }

  // Vérifier si une image est sélectionnée
  isSelected(index: number): boolean {
    return this.selectedImages.has(index);
  }

  // Sélectionner ou désélectionner une image spécifique
  toggleSelection(index: number): void {
    if (this.selectedImages.has(index)) {
      this.selectedImages.delete(index);
    } else {
      this.selectedImages.add(index);
    }
  }
}
