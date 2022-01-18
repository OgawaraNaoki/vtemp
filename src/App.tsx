import { AppRoutes } from "@/routes";
import { AppProvider } from "./providers/app";

export const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};
