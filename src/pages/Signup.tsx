import { ArrowLeft, Lock, Mail, Truck, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import AuthHeader from "@/ui/AuthHeader";
import { SplitLayout } from "@/ui/layouts/SplitLayout";
import CustomButton from "@/ui/CustomButton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

// Zod schema for form validation
const signupSchema = z
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
      .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
    confirmPassword: z
      .string({ required_error: "Confirmez votre mot de passe" })
      .min(6, "Confirmez votre mot de passe"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

type SignUpFormValues = z.infer<typeof signupSchema>;

export default function SignUp() {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignUpFormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <SplitLayout imageSrc="../../public/images/pres.webp">
      <div className="relative space-y-4">
        <div className="absolute top-0 left-0">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
        </div>
        <AuthHeader
          title="Bienvenue!"
          description="Créer un compte pour accéder à notre plateforme"
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="sr-only">Nom</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Nom"
                      {...field}
                      className="pl-9 py-5 rounded-lg"
                    />
                  </FormControl>
                  <UserRound
                    className="absolute left-3 top-3 transform -translate-y-1/2 text-primary/60"
                    size={17}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      {...field}
                      className="pl-9 py-5 rounded-lg"
                    />
                  </FormControl>
                  <Mail
                    className="absolute left-3 top-3 transform -translate-y-1/2 text-primary/60"
                    size={17}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Role Field */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Rôle</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sélectionnez un rôle" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="client">
                        <div className="flex items-center gap-x-1">
                          <UserRound className="mb-[0.5px]" size={17} />
                          <span>Client</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="driver">
                        <div className="flex items-center gap-x-1">
                          <Truck className="mb-[0.5px]" size={17} />
                          <span>Chauffeur</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="sr-only">Mot de passe</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Mot de passe"
                      {...field}
                      className="pl-9 py-5 rounded-lg"
                    />
                  </FormControl>
                  <Lock
                    className="absolute left-3 top-3 transform -translate-y-1/2 text-primary/60"
                    size={17}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password Field */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="sr-only">
                    Confirmez votre mot de passe
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirmez votre mot de passe"
                      {...field}
                      className="pl-9 py-5 rounded-lg"
                    />
                  </FormControl>
                  <Lock
                    className="absolute left-3 top-3 transform -translate-y-1/2 text-primary/60"
                    size={17}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <CustomButton type="submit" className="w-full rounded-lg" primary>
              S'inscrire
            </CustomButton>
          </form>
        </Form>

        <div className="text-center text-sm">
          Vous avez déjà un compte?{" "}
          <Link
            to="/login"
            className="underline underline-offset-4 hover:text-main"
          >
            Se connecter
          </Link>
        </div>
      </div>
    </SplitLayout>
  );
}
