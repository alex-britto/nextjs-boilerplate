import { UserProps } from '@/interfaces/user'

export const getUser = () => {
  const userJson = localStorage.getItem('user')

  if (userJson !== null) {
    try {
      return JSON.parse(userJson)
    } catch (error) {
      console.error('Erro ao fazer o parse do usuário:', error)
    }
  }

  return null
}

export const setUserLS = (user: UserProps) => localStorage.setItem('user', JSON.stringify(user))

export const clearUser = () => localStorage.removeItem('user')
