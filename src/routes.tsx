import { HomePage } from "./pages/Hompage";
import { Menu } from "./pages/Menu";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";

export const routesPath = {
  home: "/",
  menu: "/menu",
  aboutUs: "/about-us",
  contact: "/contact-us",
};

export const routes: Routes[] = [
  {
    path: routesPath.home,
    component: HomePage,
    label: "home",
  },
  {
    path: routesPath.menu,
    component: Menu,
    label: "menu",
  },
  {
    path: routesPath.aboutUs,
    component: AboutUs,
    label: "about us",
  },
  {
    path: routesPath.contact,
    component: ContactUs,
    label: "contact us",
  },
];

export function replaceRouteParam(
  routePattern: string,
  replacement: string
): string {
  // Use a regular expression to replace the :id placeholder with the provided string
  const replacedRoute = routePattern.replace(/:id/g, replacement);
  return replacedRoute;
}
