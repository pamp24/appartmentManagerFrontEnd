// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth';  // Your backend URL

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/login`, { username, password });
  }

  signup(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, { username, password });
  }

  // Store the JWT token in local storage
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Get the JWT token from local storage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Log out by removing the token
  logout(): void {
    localStorage.removeItem('authToken');
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null;
  }
}
