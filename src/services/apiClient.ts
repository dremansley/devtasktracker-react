import axios, {AxiosInstance} from "axios";
import Cookies from "js-cookie"

const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
    const csrfToken = Cookies.get("csrftoken");
    if (csrfToken) {
        config.headers["X-CSRFToken"] = csrfToken;
    }
    return config;
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 403) {
            window.location.href = `${import.meta.env.VITE_BACKEND_URL}/accounts/login/`;
        }
        return Promise.reject(error);
    }
);

export default apiClient;
