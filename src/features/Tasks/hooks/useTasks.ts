import {useQuery} from "@tanstack/react-query";
import {fetchTasks} from "../services/fetchTasks.ts";
import {TaskListResponse} from "../interfaces/TasksInterfaces.ts";

export const useTasks = (project_id: number) => {
    return useQuery<TaskListResponse | null>({
        queryKey: ["tasks", project_id],
        queryFn: ()=> fetchTasks(project_id),
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
        enabled: !!project_id
    });
};
