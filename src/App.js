import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css"
import { Gameflix } from "./Gameflix";
import { Principal } from "./Principal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal />
  },
  {
    path: "/home",
    element: <Gameflix />
  },
]);

export default function App() {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <>
      <React.StrictMode>
        <RouterProvider router={router} />    
      </React.StrictMode>
    </>
  );
}
