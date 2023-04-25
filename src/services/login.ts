import { interceptorsLogin } from '@/interceptors/login'

import { UserProps } from '@/shared/interfaces/user'

export const LoginServices = {
	getCredentials: (data: UserProps) =>
		interceptorsLogin.post('/v1/users/login', data),
}
