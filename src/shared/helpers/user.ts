import { UserProps } from '@/shared/interfaces/user'

export const getUser = () => {
	if (typeof localStorage !== 'undefined') {
		const userJson = localStorage.getItem('user')

		if (userJson !== null) {
			try {
				return JSON.parse(userJson)
			} catch (e) {
				console.error('Error parsing user JSON', e)
			}
		}
	}

	return null
}

export const setUserLS = (user: UserProps) =>
	localStorage.setItem('user', JSON.stringify(user))

export const clearUser = () => localStorage.removeItem('user')
