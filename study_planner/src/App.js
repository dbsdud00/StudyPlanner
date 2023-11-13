import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./routes/Main";
import "./css/Planner.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
