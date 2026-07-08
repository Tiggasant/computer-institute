import axios from "axios";

// Central Axios instance. All API calls in the app should go through this
// client so that base URL, headers, timeouts and error handling stay
// consistent. Point VITE_API_BASE_URL at your real backend when it's ready;
// until then, service functions fall back to local data (see /src/data).
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Centralised error normalisation so every page can rely on
    // error.message being a human-readable string.
    const message =
      error.response?.data?.message ||
      error.message ||
      "Something went wrong. Please try again.";
    return Promise.reject({ ...error, message });
  }
);

export default apiClient;
