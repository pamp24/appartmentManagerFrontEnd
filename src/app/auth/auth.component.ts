import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports:[
    CommonModule,
    ReactiveFormsModule,

  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent {
  isLoginMode: boolean = true;
  loginForm: FormGroup;
  error: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false],
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    if (this.isLoginMode) {
      this.authService.login(email, password).subscribe({
        next: (response) => {
          console.log('Επιτυχής Σύνδεση', response);
        },
        error: (err) => {
          this.error = 'Αποτυχία σύνδεσης. Παρακαλώ δοκιμάστε ξανά.';
          console.error('Αποτυχής Σύνδεση', err);
        },
      });
    } else {
    
    }
  }

  isTouchedAndInvalid(controlName: string): any {
    const control = this.loginForm.get(controlName);
    return control?.touched && control.invalid;
  }
}
