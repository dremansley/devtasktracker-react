import {AuthCheckResponse} from "../interfaces/AuthCheckResponse.ts";
import apiClient from "../../../services/apiClient.ts";

export const fetchAuthCheck = async (): Promise<AuthCheckResponse> => {
    const response = await apiClient.get<AuthCheckResponse>(`/api/users/auth-check/`);
    return response.data;
};
