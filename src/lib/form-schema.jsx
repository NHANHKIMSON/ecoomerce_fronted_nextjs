import { useForm } from "react-hook-form"
import { z } from "zod"
export const formSchema = z.object({
    // username: z.string().min(2).max(20).regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
    email: z.string().email(),
    password: z.string().min(2),
})