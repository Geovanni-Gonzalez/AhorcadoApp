import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlayerForm from "./pages/PlayerForm"; 

function App() {

  const router = createBrowserRouter([
    {
      path: "/", 
      element: <HomePage />,
    },
    {
      path: "/player-form", 
      element: <PlayerForm />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
