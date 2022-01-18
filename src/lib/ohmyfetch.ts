import { $fetch, FetchOptions } from "ohmyfetch";
import { storage } from "@/utils/storage";
import { useNotificationStore } from "@/stores/notifications";
import { API_URL } from "@/config";

export const apiFetch = $fetch.create({
  baseURL: API_URL,
  // add token header with each request
  async onRequest({ request, options }) {
    const token = storage.getToken();
    if (token) {
      options.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    options.headers = {
      Accept: "application/json",
    };

    console.log("[fetch request]", request, options);
  },
  async onResponse({ request, response, options }) {
    // Log response
    console.log("[fetch response]", request, response.status, response.body);
  },
  async onResponseError({ request, response, options }) {
    // Log error
    const message = (await response.json()) ?? "no body";
    useNotificationStore.getState().addNotification({
      type: "error",
      title: "Error",
      message: message,
    });
    console.log(
      "[fetch response error]",
      request,
      response.status,
      response.body,
    );
  },
});
