import { createBrowserRouter } from "react-router-dom";
import Timeline from "./pages/timeline";
import Status from "./pages/Status";
import Sidebar from "./components/Sidebar";
import App from "./App";

// Cada objeto representa ua página da aplicação
/* Estrutura:
  {
    path: "caminho",
    element: <Componente />
  }
*/

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Timeline />
      },
      {
       path: "/status",
       element: <Status />
      }
    ]
  }
])