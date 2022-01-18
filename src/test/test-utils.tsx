/* eslint-disable import/export */
import { render } from "@testing-library/react";
import { AppProvider } from "@/providers/app";

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: AppProvider,
    ...options,
  });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
