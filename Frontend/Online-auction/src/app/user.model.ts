// src/app/models/user.model.ts

export interface User {
  id: number;
  username: string;
  email: string;
  password?: string; // Optional in case of secure transmission
  token?: string; // JWT or session token after login
  role?: 'admin' | 'user'; // Role-based access
}
