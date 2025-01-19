import {useQuery} from "@tanstack/react-query";
import {AuthCheckResponse} from "../interfaces/AuthCheckResponse.ts"
import {fetchAuthCheck} from "../services/fetchAuthCheck.ts";

export const useAuthCheck = () => {
    return useQuery<AuthCheckResponse>({
        queryKey: ["auth-check"],
        queryFn: fetchAuthCheck,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
    });
};
