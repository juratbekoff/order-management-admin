import {SingleTaskType} from "@/types/tasks";
import {SingleJobNoteType} from "@/types/job-notes";

export type GetOrdersQueryType = {
    report_id?: number,
    wo_number?: string,
    loan_number?: number,
    status?: string,
    country?: string,
    address?: string,
    city?: string,
    state?: string,
    zip_code?: string
}

export type SingleOrderType = {
    id: number;
    report_id: number;
    wo_number: string;
    org_wo_num: number;
    wo_status: string;
    client_company_alias: string;
    cust_text: string;
    loan_number: string;
    loan_type_other: string;
    date_received: string;
    date_due: string;
    start_date: string;
    country: string | null;
    address: string;
    city: string;
    state: string;
    zip: string;
    comments: string;
    work_type_alias: string;
    mortgage_name: string;
    ppw_report_id: number;
    import_user_id: number | null;
    mcs_woid: string;
    bg_checkin_provider: string;
    autoimport_client_orig: string;
    wo_number_orig: string;
    wo_photo_ts_format: string;
    autoimport_userid: string;
    lot_size: string;
    lock_code: string;
    key_code: string;
    broker_name: string;
    broker_company: string;
    broker_phone: string;
    broker_email: string;
    has_foh: boolean;
    coordinates: string | null;
    bit_photos_url: string | null;
    createdAt: string;
    updatedAt: string;
    assigned_workers: string,
    tasks: SingleTaskType[],
    job_notes: SingleJobNoteType[];
};

export type GetWorkOrdersType = {
    message: string,
    isInitial: boolean,
    orders: SingleOrderType[],
}
