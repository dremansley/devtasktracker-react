import {TaskDetailResponse} from "../interfaces/TasksInterfaces.ts";
import apiClient from "../../../services/apiClient.ts";

export const fetchTaskDetails = async (task_id: number): Promise<TaskDetailResponse | null> => {
    if(!task_id) return null
    const response = await apiClient.get<TaskDetailResponse>(`/api/tasks/${task_id}`);
    return response.data;
};
