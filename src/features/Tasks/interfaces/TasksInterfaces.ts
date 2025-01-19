import {User} from "../../User/interfaces/userInterfaces.ts";

export interface TaskListResponse{
    tasks: Task[]
}

export interface Task {
    id: number;
    title: string;
    description: string | null;
    priority: "LOW" | "MEDIUM" | "HIGH";
    status: "TO_DO" | "IN_PROGRESS" | "DONE";
    type: "FEATURE" | "BUG" | "TASK";
    created_by: User;
    assigned_to: User;
    project: number;
    created_at: string;
    updated_at: string;
    due_date: string;
    completion_date: string | null;
    task_completion_time: number;
    is_overdue: boolean;
}

export interface TaskDetailResponse {
    task: Task;
    status: "success" | "error";
}
