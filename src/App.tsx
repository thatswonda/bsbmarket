import { BrowserRouter } from "react-router-dom";
import Providers from "./Providers.tsx";
import AppRoutes from "./AppRoutes.tsx";

const App = () => (
  <Providers>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Providers>
);

export default App;
