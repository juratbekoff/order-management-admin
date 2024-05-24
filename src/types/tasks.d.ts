export type SingleTaskType = {
    id: number;
    report_id: number;
    desc: string;
    qty: number;
    price: number;
    total: number;
    add: string;
    isVisible: boolean;
    isCompleted: boolean;
    createdAt: string;
    updatedAt: string;
    TaskTimeRecords: TaskTimeRecordsType[]
}

export type TaskTimeRecordsType = {
    id: number;
    task_id: number;
    worker_id: number | null;
    start_time: number;
    end_time: number;
    spent_time: number;
    createdAt: string;
    updatedAt: string;
}