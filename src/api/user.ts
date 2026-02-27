export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload {
  username: string
  email: string
  password: string
}

export interface AuthResponse {
  token: string
  user: {
    id: string
    username: string
    email: string
    avatar: string
  }
}

export async function login(_payload: LoginPayload): Promise<AuthResponse> {
  // TODO: replace with real API call
  return Promise.resolve({
    token: 'mock-token',
    user: { id: '1', username: 'demo', email: 'demo@example.com', avatar: '' }
  })
}

export async function register(_payload: RegisterPayload): Promise<AuthResponse> {
  // TODO: replace with real API call
  return Promise.resolve({
    token: 'mock-token',
    user: { id: '1', username: _payload.username, email: _payload.email, avatar: '' }
  })
}
