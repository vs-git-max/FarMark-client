import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <Routes>
      <QueryClientProvider client={queryClient}>
        <Route path="/" element={<Home />} />
      </QueryClientProvider>
    </Routes>
  );
};

export default App;
