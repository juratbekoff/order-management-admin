import {Navbar} from "@/components";
import {IoFilterSharp, IoSync} from "react-icons/io5";
import {WorkOrdersTable} from "@/components/tables";
import {
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table";
import {WorkOrdersTableColumns, WorkOrderTableType} from "@/components/tables/columns";
import {useEffect, useState} from "react";
import {MdAssignmentAdd} from "react-icons/md";
import {Input} from "@/components/ui/input.tsx";
import {DialogModal} from "@/components/ui/dialog.tsx";
import {AssignWorker, FilterOrdersForm} from "@/components/forms";
import {useAssignWorkerModal, useFilterOrdersModal, useFilterOrdersStore} from "@/hooks/useZustand.tsx";
import {useGetOrders} from "@/hooks/useOrder.ts";
import {GetWorkOrdersType} from "@/types/orders";
import {FaFilter} from "react-icons/fa6";

const WorkOrders = () => {
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})
    const [selectedOrders, setSelectedOrders] = useState<WorkOrderTableType[]>()

    // search keyword
    const [keyword, setKeyword] = useState<string>("")

    const assignWorkerModal = useAssignWorkerModal()
    const filterOrdersModal = useFilterOrdersModal()

    // zustand
    const {isFiltered} = useFilterOrdersStore()

    const getOrdersQuery = useGetOrders({
        report_id: +keyword!
    })

    const ordersData: GetWorkOrdersType = getOrdersQuery.data?.data

    const tableConfigs = useReactTable({
        data: [
            {
                report_id: 5798185,
                city: "Tashkent",
                address: "3544 GORDON AVE",
                wo_number: "M14882155",
                state: "IL",
                wo_status: "In Field",
                date_received: "20.02.2024",
                id: 210,
                assigned_workers: "John Doe,Stiv Jobs",
                date_due: "20.05.2024"
            },
            {
                report_id: 5798185,
                city: "CREVE COEUR",
                address: "260 SYLVAN LN",
                wo_number: "M14882155",
                state: "IL",
                wo_status: "In Field",
                date_received: "20.02.2024",
                id: 212,
                assigned_workers: "John Doe,Stiv Jobs",
                date_due: "20.05.2024"
            },
            {
                report_id: 5798185,
                city: "Chicago",
                address: "8010 S PHILLIPS AVE",
                wo_number: "M14882155",
                state: "MO",
                wo_status: "In Field",
                date_received: "20.02.2024",
                id: 211,
                assigned_workers: "John Doe,Stiv Jobs",
                date_due: "20.05.2024"
            },
            {
                report_id: 5798185,
                city: "Tashkent",
                address: "asd",
                wo_number: "M14882155",
                state: "IL",
                wo_status: "In Field",
                date_received: "20.02.2024",
                id: 210,
                assigned_workers: "John Doe,Stiv Jobs",
                date_due: "20.05.2024"
            },
        ],
        columns: WorkOrdersTableColumns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            columnVisibility,
            rowSelection,
        },
    })

    const onAssign = () => {
        const selectedRowIds = tableConfigs.getSelectedRowModel().flatRows.map((row) => row.id);
        const selectedData = ordersData?.orders.filter((item, index) => selectedRowIds.includes(String(index)));
        setSelectedOrders(selectedData)
        assignWorkerModal.onOpen()
    }

    useEffect(() => {
        getOrdersQuery.refetch()
    }, [keyword])


    // if (getOrdersQuery.isLoading) {
    //     return <h1>Loading...</h1>
    // }


    // @ts-ignore
    return (
        <>
            <Navbar name={"Work Orders"}/>

            <DialogModal isOpen={assignWorkerModal.isOpen} onClose={assignWorkerModal.onClose}
                         className={"w-[450px] max-lg:w-[450px]"}>
                <AssignWorker selected_orders={selectedOrders!}/>
            </DialogModal>

            <DialogModal isOpen={filterOrdersModal.isOpen} onClose={filterOrdersModal.onClose} className={"w-[800px]"}>
                <FilterOrdersForm/>
            </DialogModal>

            <div className={"flex justify-between gap-3 w-full max-lg:flex-col"}>
                <div className={"flex gap-4"}>
                    {
                        (tableConfigs.getIsAllPageRowsSelected() || tableConfigs.getIsSomePageRowsSelected()) &&
                        <div
                            className={`bg-white hover:bg-white py-1 px-4 flex gap-1 cursor-pointer items-center rounded-md shadow-sm border justify-center`}
                            onClick={onAssign}
                        >
                            <MdAssignmentAdd className={"text-xl"}/>
                            <span className={"text-sm"}>Assign worker</span>
                        </div>
                    }

                    <div
                        onClick={filterOrdersModal.onOpen}
                        className={`bg-white hover:bg-white py-1 px-5 flex gap-1 cursor-pointer items-center rounded-md shadow-sm border duration-300`}>
                        {
                            isFiltered ? <FaFilter className={"text-base"}/> : <IoFilterSharp className={"text-base"}/>
                        }

                        <span className={"text-sm"}>{!isFiltered ? "Filter" : "Filtered"}</span>
                    </div>

                    <Input placeholder={"Search by report id..."} type={"number"} className={"w-56"}
                           onChange={(e) => setKeyword(e.target.value)}/>
                </div>

                <div className={"flex gap-2 max-lg:justify-end"}>
                    <h1 className={"text-sm self-center text-gray-400"}>Last sync: 20.08.2024, 10:00 (27.03 sec)</h1>
                    <div
                        className={"flex gap-1 items-center bg-primary text-white rounded-md shadow px-3 text-sm py-[6px] border cursor-pointer"}>
                        <IoSync className={"text-[18px]"}/>
                        <span>Sync orders</span>
                    </div>
                </div>
            </div>

            <div className={"bg-white shadow rounded-md"}>
                <WorkOrdersTable table={tableConfigs}/>
            </div>
        </>
    )
};

export default WorkOrders;