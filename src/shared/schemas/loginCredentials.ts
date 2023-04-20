import { z } from 'zod'

import { VALIDATION_CREDENTIALS } from '@/shared/constants/loginMessages'

export const credentialsSchema = z.object({
	email: z.string().email({ message: VALIDATION_CREDENTIALS.email }),
	password: z.string().min(6, { message: VALIDATION_CREDENTIALS.senha }),
})
