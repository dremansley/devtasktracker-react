interface ProjectLead {
    id: number;
    first_name: string;
    last_name: string;
}

export interface Project {
    id: number;
    project_lead: ProjectLead;
    title: string;
    description: string | null;
    project_start: string;
    project_expiry: string | null;
    created_at: string;
    is_active: boolean;
    is_deleted: boolean;
}

export interface UserProjectListResponse {
    projects: Project[]
}
