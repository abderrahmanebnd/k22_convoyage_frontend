import { z } from "zod";

export type User = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  role: "client" | "driver";
};

// Zod schema for form validation
export const signupSchema = z
  .object({
    name: z
      .string({ required_error: "Le nom est requis" })
      .min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z
      .string({ required_error: "L'adresse email est requise" })
      .email("Adresse email invalide"),
    role: z.enum(["client", "driver"], {
      invalid_type_error: "Sélectionnez un rôle",
      required_error: "Sélectionnez un rôle",
    }),
    password: z
      .string({ required_error: "Le mot de passe est requis" })
      .min(8, "Le mot de passe doit contenir au moins 8 caractères"),
    passwordConfirm: z
      .string({ required_error: "Confirmez votre mot de passe" })
      .min(8, "Confirmez votre mot de passe"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Les mots de passe ne correspondent pas",
    path: ["passwordConfirm"],
  });

export type SignUpFormValues = z.infer<typeof signupSchema>;
