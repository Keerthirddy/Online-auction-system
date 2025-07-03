import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;

  constructor() {
    // Check if user is already logged in from localStorage
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      // Try to get the full user object if available
      const registeredUser = localStorage.getItem('registeredUser');
      if (registeredUser) {
        const userObj = JSON.parse(registeredUser);
        if (userObj.username === loggedInUser) {
          this.currentUser = userObj;
        } else {
          this.currentUser = { username: loggedInUser, email: '' };
        }
      } else {
        this.currentUser = { username: loggedInUser, email: '' };
      }
    }
  }

  register(user: User): Observable<boolean> {
    // In a real app, this would make an API call
    // For now, we'll just simulate success
    return of(true);
  }

  login(user: User): Observable<boolean> {
    // In a real app, this would make an API call
    // For now, we'll just simulate success
    this.currentUser = user;
    localStorage.setItem('loggedInUser', user.username);
    // Also store the full user object for later retrieval
    localStorage.setItem('registeredUser', JSON.stringify(user));
    return of(true);
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('loggedInUser');
    // Optionally, do not remove registeredUser so user can log in again
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }
} 