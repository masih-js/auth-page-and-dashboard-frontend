import { z } from "zod";

export const loginSchema = z.object({
  phone: z
    .string()
    .length(11, { message: "Phone number must be exactly 11 digits" })
    .regex(/^09\d{9}$/, {
      message: "Phone number must start with '09' and contain only digits",
    }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
