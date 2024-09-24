import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from '../../../auth/login/login.component';
import { AuthService } from '../../services/bouton/auth.service';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login/login.service';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatDialogModule,CommonModule,MatIcon,MatMenu,RouterLink,MatMenuTrigger],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  showAddEstablishmentButton: boolean = false;
  showLoginButton: boolean = false;
  showLogoutButton: boolean = false;
  userName: string | null = null; // Nom de l'utilisateur connecté

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public authService: AuthService,
    public loginService: LoginService
  ) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateButtonVisibility(event.urlAfterRedirects);
      }
    });
    // Initialisez les boutons en fonction de la route actuelle au chargement du composant
    this.updateButtonVisibility(this.router.url);

    // Obtenez le nom de l'utilisateur connecté
    this.loginService.getUser().subscribe(user => {
        this.userName = user?.nom || 'Utilisateur';
    });
      
  }

  updateButtonVisibility(url: string) {
    if (url === '/' || url === '') {
      this.showAddEstablishmentButton = true;
      this.showLoginButton = true;
      this.showLogoutButton = false;
    } else if (url === '/home') {
      this.showAddEstablishmentButton = true;
      this.showLoginButton = false;
      this.showLogoutButton = true;
    } else {
      this.showAddEstablishmentButton = true;
      this.showLoginButton = true;
      this.showLogoutButton = true;
    }
  }
  
  logout(){
    this.loginService.logout();
    this.navigateHome();
  }

  navigateHome() {
		this.router.navigate(['/']);
	  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '80%',  // Définir la largeur à 80% de la page
      maxWidth: '100%',  // Assurez-vous que la largeur ne dépasse pas la taille de l'écran  
      // data: { },  // Tu peux passer des données si nécessaire
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('La fenêtre de connexion a été fermée');
    });
  }
}
