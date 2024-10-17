import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header1Component } from '../../../../ADMIN_CLIENT/layout/header1/header1.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet,Header1Component],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
