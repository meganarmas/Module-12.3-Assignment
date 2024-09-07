import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CrudOperation from "./Components/CRUD";
import './App.css';

const queryClient = new QueryClient();

function App() {

  return (
   <QueryClientProvider client={queryClient}>
    <CrudOperation />
    </QueryClientProvider>
  );
};

export default App;
