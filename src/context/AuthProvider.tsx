import { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMeApi } from "@/api/auth";
import { handleError } from "@/lib/utils";

// Define the user type (adjust based on your actual user model)
interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  //   setUser: (user: User | null) => void;
}

// Create Auth Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create QueryClient for React Query

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  //   const [user, setUser] = useState<User | null>(null);
  const {
    data: user,
    isLoading,
    error,
  } = useQuery<User, Error>({
    queryKey: ["authCheck"],
    queryFn: getMeApi,
  });

  return (
    <AuthContext.Provider
      value={{
        user: user || null,
        loading: isLoading,
        error: error ? handleError(error) : null,
        //   setUser: ,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
