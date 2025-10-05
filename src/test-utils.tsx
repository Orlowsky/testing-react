import { render, RenderOptions } from "@testing-library/react";
import { AppProviders } from "./components/providers/app-providers";
import { ReactElement } from "react";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AppProviders, ...options });

// re-export everything, dzieki temu nie trzeba importowac w kompontach gdzie uzywamy custom render
export * from "@testing-library/react";

// override render method
export { customRender as render };
