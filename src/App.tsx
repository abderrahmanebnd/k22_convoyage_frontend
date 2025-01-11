import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Router";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              color: "#0c0",
            },
          },
          error: {
            duration: 6000,
            style: {
              color: "#c00",
            },
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#efefef",
            fontWeight: "500",
          },
        }}
      />
    </QueryClientProvider>
  );
}
