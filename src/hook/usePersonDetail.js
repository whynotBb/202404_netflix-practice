import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPersonDetail = (id) => {
    return api.get(`person/${id}`);
};

export const usePersonDetailQuery = (id) => {
    return useQuery({
        queryKey: ["person-detail", id],
        queryFn: () => fetchPersonDetail(id),
        select: (result) => result.data,
    });
};
