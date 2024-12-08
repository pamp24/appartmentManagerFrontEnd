import { CommonModule } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
})

export class AuthComponent implements OnInit{
  loginForm!: FormGroup;
  isLoggedinMode = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false],
    });
  }
  onSwitchMode() {
    this.isLoggedinMode = !this.isLoggedinMode;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

}

