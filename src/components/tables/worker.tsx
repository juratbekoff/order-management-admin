import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {FiEdit} from "react-icons/fi";
import {AiOutlineDelete} from "react-icons/ai";
import {useEditWorkerModal} from "@/hooks/useZustand.tsx";
import {WorkerType} from "@/types/worker";
import {dateFormatter} from "@/lib/utils.ts";

type WorkerTableProps = {
    data: WorkerType[]
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const WorkersTable = ({onEdit, onDelete, data}: WorkerTableProps) => {
    const editWorkerModal = useEditWorkerModal();

    return (
        <div className={"bg-white shadow rounded-md"}>
            <Table className="max-lg:w-[700px]">
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Username</TableHead>
                        <TableHead>Password</TableHead>
                        <TableHead>CreatedAt</TableHead>
                        <TableHead>UpdatedAt</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        data?.map(worker => (
                            <TableRow key={worker.id}>
                                <TableCell>{worker.id}</TableCell>
                                <TableCell>{worker.name}</TableCell>
                                <TableCell>{worker.username}</TableCell>
                                <TableCell>••••••••••</TableCell>
                                <TableCell>{dateFormatter(worker.createdAt)}</TableCell>
                                <TableCell>{dateFormatter(worker.updatedAt)}</TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        <FiEdit className="text-[18px] text-amber-700 opacity-60 cursor-pointer"
                                                onClick={() => {
                                                    editWorkerModal.onOpen()
                                                    onEdit(worker.id)
                                                }}/>
                                        <AiOutlineDelete className={"text-[19px] text-destructive cursor-pointer"}
                                                         onClick={() => onDelete(worker.id)}/>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
};

export default WorkersTable;