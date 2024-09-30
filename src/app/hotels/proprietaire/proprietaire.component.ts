import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import intlTelInput from 'intl-tel-input';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-proprietaire',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatDivider,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule

  ],
  templateUrl: './proprietaire.component.html',
  styleUrl: './proprietaire.component.css'
})
export class ProprietaireComponent implements OnInit{
  @ViewChild('phoneInput', { static: false }) phoneInputElement!: ElementRef; // Utilisation de ViewChild

  ngOnInit(): void {
    // const inputElement = document.getElementById('phone') as HTMLInputElement; // Type assertion
    // if (inputElement) {
    //   intlTelInput(inputElement, {
    //     initialCountry: 'US',
    //     separateDialCode: true,
    //     utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/24.5.0/build/js/i18n/hi/countries.min.js'
    //   });
    // }
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  ngAfterViewInit(): void {
    if (this.phoneInputElement) {
      intlTelInput(this.phoneInputElement.nativeElement, {
        initialCountry: 'GA',
        separateDialCode: true,
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/24.5.0/build/js/utils.js'
      });
    }
  }

}
