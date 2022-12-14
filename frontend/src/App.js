import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Error from "./components/main-content/error-component/Error";
import Login, {
  loginAction,
} from "./components/main-content/login-component/Login";
import About from "./components/main-content/about-component/About";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  const [windowSize, setWindowSize] = useState(
    window.matchMedia("(min-width: 768px)")
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setWindowSize(e.matches));
  }, []);

  const Application = () => {
    return (
      <div className="App">
        <Login />
      </div>
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Navbar windowSize={windowSize} />}
        errorElement={<Error />}
      >
        <Route index element={<Application />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Application />}>
          <Route
            path="check-user"
            element={<Application />}
            action={loginAction}
          />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
