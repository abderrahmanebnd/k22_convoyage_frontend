import { ArrowLeft, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import AuthHeader from "@/features/Auth/api/AuthHeader";
import { SplitLayout } from "@/ui/layouts/SplitLayout";
import CustomButton from "@/ui/common/CustomButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { LoginFormValues, loginSchema } from "@/lib/types";
import { useLogin } from "@/features/Auth/api/auth";
import { handleError } from "@/lib/utils";

export default function Login() {
  const { mutate: login, isError, isPending, error } = useLogin();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    login(data);
  };

  return (
    <SplitLayout imageSrc="/images/pres.webp">
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
          title="Connectez-vous"
          description="Accédez à votre compte"
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {isError && (
              <div className="text-red-600 bg-red-100 text-sm p-2 rounded-md">
                {handleError(error)}
              </div>
            )}
            {/* Email Field */}
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

            {/* Submit Button */}
            <CustomButton
              type="submit"
              className="w-full rounded-lg"
              primary
              disabled={isPending}
            >
              {isPending ? "Connexion en cours..." : "Se connecter"}
            </CustomButton>
          </form>
        </Form>

        <div className="text-center text-sm">
          Vous n'avez pas de compte?{" "}
          <Link
            to="/signup"
            className="underline underline-offset-4 hover:text-main"
          >
            S'inscrire
          </Link>
        </div>
      </div>
    </SplitLayout>
  );
}
