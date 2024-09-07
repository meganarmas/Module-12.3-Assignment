import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddPost from "./Components/AddPost";
import UpdateAPost from "./Components/UpdatePostForm";



function App() {
const queryClient = new QueryClient();

  return (
   <QueryClientProvider client={queryClient}>
    <AddPost />
    <UpdateAPost/>
    </QueryClientProvider>
  );
};

export default App;