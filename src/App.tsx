import { Route, Routes } from "react-router-dom";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { routes } from "./routes";
import { AppFooter } from "./components/AppFooter/AppFooter";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

export function App() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="app-container">
      <ScrollToTop />
      <AppHeader />
      <main>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              Component={route.component}
              path={route.path}
            />
          ))}
        </Routes>
      </main>
      <AppFooter />
    </div>
  );
}
