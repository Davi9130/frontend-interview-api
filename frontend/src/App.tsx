import { useContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./pages/Home";
import { RoutingContext } from "./Router";
import "./App.css";
import { CustomerV1 } from "./pages/CustomerV1";
import { CustomerV2 } from "./pages/CustomerV2";
import { CustomerV3 } from "./pages/CustomerV3";
import { CustomerV4 } from "./pages/CustomerV4";
import { CustomerV5 } from "./pages/CustomerV5";
import { NotFound } from "./pages/404";

function App() {
  const { page } = useContext(RoutingContext);

  const queryClient = new QueryClient();
  const Elem = {
    "": Home,
    "v1/customer": CustomerV1,
    "v2/customer": CustomerV2,
    "v3/customer": CustomerV3,
    "v4/customer": CustomerV4,
    "v5/customer": CustomerV5,
    "404": NotFound,
  }[page];
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Elem />
      </div>
    </QueryClientProvider>
  );
}

export default App;
