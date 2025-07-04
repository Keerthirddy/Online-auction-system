import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showRegister = true;

  registerData: User = {
    username: '',
    email: '',
    password: ''
  };

  loginData: User = {
    username: '',
    email: '',
    password: ''
  };

  private router = inject(Router);

  toggleForm(): void {
    this.showRegister = !this.showRegister;
  }

  onRegisterSubmit(form: NgForm): void {
    if (form.invalid) {
      alert('Please fill out all registration fields.');
      return;
    }

    if (!this.registerData.password || this.registerData.password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    localStorage.setItem('registeredUser', JSON.stringify(this.registerData));
    alert('Registered successfully! Now login.');
    this.toggleForm();
  }

  onLoginSubmit(form: NgForm): void {
    if (form.invalid) {
      alert('Please fill out all login fields.');
      return;
    }

    if (!this.loginData.password || this.loginData.password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    const stored = localStorage.getItem('registeredUser');
    if (!stored) {
      alert('No registered user found. Please register first.');
      return;
    }

    const storedUser: User = JSON.parse(stored);
    if (
      storedUser.username === this.loginData.username &&
      storedUser.email === this.loginData.email &&
      storedUser.password === this.loginData.password
    ) {
      localStorage.setItem('loggedInUser', this.loginData.username);
      if (confirm(`Welcome ${this.loginData.username}! Click OK to go to the homepage.`)) {
        this.router.navigate(['/home']);
      }
    } else {
      alert('Invalid login credentials.');
    }
  }
}
