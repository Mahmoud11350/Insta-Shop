import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};
export default App;
