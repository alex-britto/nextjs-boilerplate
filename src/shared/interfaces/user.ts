export interface UserProps {
  email: string
  password: string
  name?: string
  typeUser?: string
}

export interface UserContextData {
  user: UserProps
  setUser: (value: UserProps) => void
  token: string | null
  setToken: (value: string) => void
  logout: () => void
}
