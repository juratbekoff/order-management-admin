import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "@/hooks/queryKeys.ts";
import {ordersService} from "@/services/api/orders.ts";
import {GetOrdersQueryType} from "@/types/orders";

export const useGetOrders = (query: GetOrdersQueryType, isEnabled: boolean = true) => {
    return useQuery({
        queryKey: [queryKeys.GET_ORDERS],
        queryFn: () => {
            return ordersService.getOrders(query);
        },
        refetchOnWindowFocus: false,
        enabled: isEnabled,
    });
};
