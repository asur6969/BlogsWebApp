import { InfoContainer } from "./components/InfoContainer";
import { AppRoutes } from "./routes/AppRoutes";

export function App() {
  return (
    <div className="relative">
      <AppRoutes />
      <InfoContainer />
    </div>
  );
}
