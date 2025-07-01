import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showRegister: boolean = true;

  constructor(private router: Router) {}

  toggleForms() {
    this.showRegister = !this.showRegister;
  }

  onRegister(form: NgForm) {
    const { username, email, password } = form.value;

    if (!username || !email || !password) {
      alert('Please fill out all fields.');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    const user = { username, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registered successfully! Now login.');
    this.showRegister = false;
  }

  onLogin(form: NgForm) {
    const { email, password } = form.value;
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      alert('No registered user found.');
      return;
    }

    const user = JSON.parse(storedUser);
    if (email !== user.email || password !== user.password) {
      alert('Invalid credentials.');
      return;
    }

    localStorage.setItem('loggedInUser', user.username);
    alert(`Welcome ${user.username}!`);
    window.location.href = '/index.html'; // Adjust if using Angular routes
  }
}
