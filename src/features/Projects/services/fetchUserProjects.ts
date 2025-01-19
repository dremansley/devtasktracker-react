import {UserProjectListResponse} from "../interfaces/ProjectInterfaces.ts";
import apiClient from "../../../services/apiClient.ts";

export const fetchUserProjects = async (): Promise<UserProjectListResponse> => {
    const response = await apiClient.get<UserProjectListResponse>(`/api/projects/`);
    return response.data;
};
