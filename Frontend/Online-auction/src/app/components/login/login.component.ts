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

  registerData = {
    username: '',
    email: '',
    password: ''
  };

  loginData = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  toggleForm() {
    this.showRegister = !this.showRegister;
  }

  onRegisterSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Please fill out all registration fields.');
      return;
    }

    if (this.registerData.password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    localStorage.setItem('registeredUser', JSON.stringify(this.registerData));
    alert('Registered successfully! Now login.');
    this.toggleForm();
  }

  onLoginSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Please fill out all login fields.');
      return;
    }

    if (this.loginData.password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    const stored = localStorage.getItem('registeredUser');
    if (!stored) {
      alert('No registered user found. Please register first.');
      return;
    }

    const storedUser = JSON.parse(stored);
    if (
      storedUser.username === this.loginData.username &&
      storedUser.email === this.loginData.email &&
      storedUser.password === this.loginData.password
    ) {
      localStorage.setItem('loggedInUser', this.loginData.username);
      if (confirm(`Welcome ${this.loginData.username}! Click OK to go to the homepage.`)) {
        this.router.navigate(['/home']); // or replace with actual homepage route
      }
    } else {
      alert('Invalid login credentials.');
    }
  }
}
