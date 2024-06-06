import React from "react";
import ReactDOM from "react-dom";
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
  return (
    <React.StrictMode>
      <div>
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

