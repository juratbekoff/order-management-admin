import {api} from "@/services/configs";
import {GetOrdersQueryType} from "@/types/orders";

class Orders {
    getOrders = async (query: GetOrdersQueryType) => {
        const {
            report_id,
            city,
            status,
            country,
            loan_number,
            org_wo_number,
            state,
            zip_code,
            address
        } = query

        return await api.get(`/orders`, {
            params: {
                report_id,
                city,
                status,
                country,
                loan_number,
                org_wo_number,
                state,
                zip_code,
                address
            }
        })
    }
}

export const ordersService = new Orders();