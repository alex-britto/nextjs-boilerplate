import { z } from "zod";

import { VALIDATION_CREDENTIALS } from "@/shared/constants/messages";

export const credentailsSchema = z.object({
  email: z.string().email({ message: VALIDATION_CREDENTIALS.email }),
  password: z.string().min(6, { message: VALIDATION_CREDENTIALS.senha }),
});
