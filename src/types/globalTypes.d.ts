import { MyCustomGlobal } from "./classes";

declare global {
  interface Routes {
    path: string;
    component: () => JSX.Element;
    label: string;
  }
  interface Dictionary<T = any> {
    [key: string]: T;
  }
}
