import { createEvent } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const useCreateEvent = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createEvent,
        onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["events"] });
        },
    });
};
