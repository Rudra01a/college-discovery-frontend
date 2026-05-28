import { AuthResponse, LoginCredentials, SignupCredentials, User } from '../../frontend/types/auth';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock user store (in-memory, also persisted via Zustand + localStorage)
const mockUsers: (User & { password: string })[] = [
  {
    id: 'demo-user-1',
    name: 'Demo User',
    email: 'demo@example.com',
    password: 'password123',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80&fit=crop&crop=face',
    createdAt: '2024-01-01',
  },
];

function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

function generateToken(): string {
  return `mock_jwt_${Math.random().toString(36).substring(2, 30)}`;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    await delay(800);

    const user = mockUsers.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );

    if (!user) {
      throw new Error('Invalid email or password');
    }

    const { password: _pw, ...safeUser } = user;
    return { user: safeUser, token: generateToken() };
  },

  async signup(credentials: SignupCredentials): Promise<AuthResponse> {
    await delay(1000);

    const exists = mockUsers.find((u) => u.email === credentials.email);
    if (exists) {
      throw new Error('An account with this email already exists');
    }

    if (credentials.password !== credentials.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    const newUser = {
      id: generateId(),
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
      createdAt: new Date().toISOString(),
    };

    mockUsers.push(newUser);

    const { password: _pw, ...safeUser } = newUser;
    return { user: safeUser, token: generateToken() };
  },

  async forgotPassword(email: string): Promise<{ message: string }> {
    await delay(1000);

    const user = mockUsers.find((u) => u.email === email);
    if (!user) {
      // Don't reveal whether email exists for security
      return { message: 'If that email exists, a reset link has been sent.' };
    }

    return { message: 'Password reset link sent to your email address.' };
  },

  async getProfile(token: string): Promise<User> {
    await delay(300);
    // In a real app, decode JWT and fetch user. Here we return the demo user.
    const user = mockUsers[0];
    const { password: _pw, ...safeUser } = user;
    return safeUser;
  },
};
