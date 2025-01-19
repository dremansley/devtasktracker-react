import {useQuery} from "@tanstack/react-query";
import {TaskDetailResponse} from "../interfaces/TasksInterfaces.ts";
import {fetchTaskDetails} from "../services/fetchTaskDetails.ts";

export const useTaskDetail = (task_id: number) => {
    return useQuery<TaskDetailResponse | null>({
        queryKey: ["task_detail", task_id],
        queryFn: ()=> fetchTaskDetails(task_id),
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
        enabled: !!task_id
    });
};
