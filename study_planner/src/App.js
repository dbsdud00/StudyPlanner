import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./routes/Main";
import Example from "./routes/Example";
import "./css/App.css";
import PlannerContents from "./routes/PlannerContents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <PlannerContents />,
      },
      {
        path: "/:date",
        element: <PlannerContents />,
      },
    ],
  },
  {
    path: "/ex",
    element: <Example />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
