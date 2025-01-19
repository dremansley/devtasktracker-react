import {useQuery} from "@tanstack/react-query";
import {UserProjectListResponse} from "../interfaces/ProjectInterfaces.ts";
import {fetchUserProjects} from "../services/fetchUserProjects.ts";

export const useUserProjects = () => {
    return useQuery<UserProjectListResponse>({
        queryKey: ["user-projects"],
        queryFn: fetchUserProjects,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
    });
};
