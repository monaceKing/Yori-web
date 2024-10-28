import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';



interface Client {
  nom: string;
  personne: number;
  arrivee: string;
  depart: string;
  hebergement: string;
  reserveLe: string;
  statuts: string;
  tarif: string;
  commission: string;
  duree: string;
  numeroReservation: string;
}


@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIcon
  ],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})

export class ReservationComponent {
    clients: Client[] = [
    {
      nom: 'Jean Dupont',
      arrivee: '2024-11-01',
      depart: '2024-11-05',
      hebergement: 'Hôtel ABC',
      reserveLe: '2024-10-20',
      statuts: 'Confirmé',
      tarif: '500€',
      commission: '50€',
      duree: '4 jours',
      numeroReservation: 'RES123456',
      personne: 0
    },
    {
      nom: 'Marie Curie',
      arrivee: '2024-11-10',
      depart: '2024-11-15',
      hebergement: 'Chalet XYZ',
      reserveLe: '2024-10-22',
      statuts: 'Réservation',
      tarif: '800€',
      commission: '80€',
      duree: '5 jours',
      numeroReservation: 'RES123457',
      personne: 0
    },
    {
      nom: 'Pierre Martin',
      arrivee: '2024-11-05',
      depart: '2024-11-10',
      hebergement: 'Auberge DEF',
      reserveLe: '2024-10-25',
      statuts: 'Confirmé',
      tarif: '400€',
      commission: '40€',
      duree: '5 jours',
      numeroReservation: 'RES123458',
      personne: 0
    },
    {
      nom: 'Sophie Germain',
      arrivee: '2024-11-15',
      depart: '2024-11-20',
      hebergement: 'Hôtel GHI',
      reserveLe: '2024-10-18',
      statuts: 'Confirmé',
      tarif: '600€',
      commission: '60€',
      duree: '5 jours',
      numeroReservation: 'RES123459',
      personne: 0
    },
    {
      nom: 'Lucie Aubrac',
      arrivee: '2024-11-20',
      depart: '2024-11-25',
      hebergement: 'Villa JKL',
      reserveLe: '2024-10-23',
      statuts: 'Annulé',
      tarif: '700€',
      commission: '70€',
      duree: '5 jours',
      numeroReservation: 'RES123460',
      personne: 0
    },
    {
      nom: 'Antoine Doinel',
      arrivee: '2024-11-02',
      depart: '2024-11-07',
      hebergement: 'Hôtel MNO',
      reserveLe: '2024-10-21',
      statuts: 'Séjour en cours',
      tarif: '550€',
      commission: '55€',
      duree: '5 jours',
      numeroReservation: 'RES123461',
      personne: 0
    },
    {
      nom: 'Clara Zetkin',
      arrivee: '2024-11-11',
      depart: '2024-11-14',
      hebergement: 'Maison PQR',
      reserveLe: '2024-10-19',
      statuts: 'A venir',
      tarif: '450€',
      commission: '45€',
      duree: '3 jours',
      numeroReservation: 'RES123462',
      personne: 0
    },
    {
      nom: 'Gabriel Garcia',
      arrivee: '2024-10-30',
      depart: '2024-11-02',
      hebergement: 'Hôtel STU',
      reserveLe: '2024-10-15',
      statuts: 'Arrivées',
      tarif: '300€',
      commission: '30€',
      duree: '3 jours',
      numeroReservation: 'RES123463',
      personne: 0
    },
    {
      nom: 'Nina Simone',
      arrivee: '2024-11-03',
      depart: '2024-11-06',
      hebergement: 'Chalet VWX',
      reserveLe: '2024-10-28',
      statuts: 'Départs',
      tarif: '400€',
      commission: '40€',
      duree: '3 jours',
      numeroReservation: 'RES123464',
      personne: 0
    },
    {
      nom: 'Albert Camus',
      arrivee: '2024-11-12',
      depart: '2024-11-19',
      hebergement: 'Hôtel YZA',
      reserveLe: '2024-10-27',
      statuts: 'A venir',
      tarif: '600€',
      commission: '60€',
      duree: '7 jours',
      numeroReservation: 'RES123465',
      personne: 0
    },
  ];


  statutsFiltres: string[] = ['Tous', 'Réservation', 'Arrivées', 'Départs', 'Séjour en cours', 'A venir', 'Annulées'];
    selectedStatut: string = 'Tous';
    dateDebut: string = '';
    dateFin: string = '';
    showCheckboxes: boolean = false; // Pour contrôler l'affichage des cases à cocher
    selectedStatuts: string[] = []; // Pour stocker les statuts sélectionnés

    statutsFiltres2: string[] =  ['Plus de filtres','Tous', 'Réservation', 'Arrivées', 'Départs', 'Séjour en cours', 'A venir', 'Annulées'];
    selectedStatut2: string = 'Plus de filtres';

    getClientsFiltres() {
        return this.clients.filter(client => {
            const dateArrivee = new Date(client.arrivee);
            const dateDebutObj = new Date(this.dateDebut);
            const dateFinObj = new Date(this.dateFin);
            
            const isStatutValide = this.selectedStatut === 'Tous' || client.statuts === this.selectedStatut;
            const isDateValide = (!this.dateDebut || dateArrivee >= dateDebutObj) && (!this.dateFin || dateArrivee <= dateFinObj);

            return isStatutValide && isDateValide;
            // const isStatutValide = this.selectedStatuts.length === 0 || this.selectedStatuts.includes(client.statuts);
            // const isDateValide = (!this.dateDebut || dateArrivee >= dateDebutObj) && (!this.dateFin || dateArrivee <= dateFinObj);

            // return isStatutValide && isDateValide;
        });
    }

    totalTarif(): number {
        return this.getClientsFiltres().reduce((total, client) => {
            const tarif = Number(client.tarif.replace('€', '').trim()) || 0; // Retire le symbole et convertit
            return total + tarif;
        }, 0);
    }

    totalCommission(): number {
        return this.getClientsFiltres().reduce((total, client) => {
            const commission = Number(client.commission.replace('€', '').trim()) || 0; // Retire le symbole et convertit
            return total + commission;
        }, 0);
    }

    printPage() {
        window.print();
    }

    toggleCheckboxes() {
      this.showCheckboxes = !this.showCheckboxes;
  }

  toggleStatutSelection(statut: string, event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
        this.selectedStatuts.push(statut);
    } else {
        this.selectedStatuts = this.selectedStatuts.filter(s => s !== statut);
    }
    console.log(this.selectedStatuts); // Pour déboguer et voir les statuts sélectionnés
}


 
}