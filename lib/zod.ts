import { email, object, string } from "zod";

export const ContactSchema = object({
  name: string().min(6, "name at least 6 characters"),
  email: string()
    .min(6, "Email at least 6 character")
    .email("Please enter a valid email"),
  subject: string().min(6, "subject at least 6 character"),
  message: string()
    .min(50, "Message at least 50 character")
    .max(200, "Message maximum 50 character"),
});
