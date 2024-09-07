import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddPost from "./Components/AddPost";
import DeletePost from "./Components/DeletePost";
import PostsList from "./Components/Postlist";


const queryClient = new QueryClient();

function App() {

  return (
   <QueryClientProvider client={queryClient}>
    <AddPost />
    <PostsList />
    </QueryClientProvider>
  );
};

export default App;