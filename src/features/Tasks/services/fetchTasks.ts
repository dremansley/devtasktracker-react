import apiClient from "../../../services/apiClient.ts";
import {TaskListResponse} from "../interfaces/TasksInterfaces.ts";

export const fetchTasks = async (project_id: number): Promise<TaskListResponse | null> => {
    if(!project_id) return null
    const response = await apiClient.get<TaskListResponse>(`/api/projects/${project_id}/tasks/`);
    return response.data;
};
