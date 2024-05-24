import {FiEdit} from "react-icons/fi";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import Switch from "@/components/ui/switch.tsx";
import {MdSettingsBackupRestore} from "react-icons/md";

const TasksTable = () => {
    return (
        <Table className="max-lg:w-[700px]">
            <TableHeader>
                <TableRow>
                    <TableHead className={"min-w-40"}>Description</TableHead>
                    <TableHead className={"min-w-28"}>Qty</TableHead>
                    <TableHead className={"min-w-28"}>Price</TableHead>
                    <TableHead className={"min-w-28"}>Total</TableHead>
                    <TableHead className={"min-w-64"}>Additional Instructions</TableHead>
                    <TableHead className={"min-w-32"}>IsVisible</TableHead>
                    <TableHead className={"min-w-28"}>IsCompleted</TableHead>
                    <TableHead className={"min-w-28"}>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Exterior Inspection</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0.00</TableCell>
                    <TableCell>0.00</TableCell>
                    <TableCell>Prep for Paint - Heavy - Exterior Wall - Vinyl Siding - 1st Story - Includes
                        Scrapping/Sanding - over 45 SF - Per SF</TableCell>

                    <TableCell>
                        <Switch/>
                    </TableCell>

                    <TableCell>
                        <Switch/>
                    </TableCell>
                    <TableCell>
                        <div className="flex gap-2 items-center">
                            <MdSettingsBackupRestore className="text-[23px] text-blue-600 cursor-pointer"/>
                            <FiEdit className="text-[18px] text-amber-700 opacity-60 font-bold cursor-pointer"/>
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Exterior Inspection</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0.00</TableCell>
                    <TableCell>0.00</TableCell>
                    <TableCell>Prep for Paint - Heavy - Exterior Wall - Vinyl Siding - 1st Story - Includes
                        Scrapping/Sanding - over 45 SF - Per SF</TableCell>

                    <TableCell>
                        <Switch/>
                    </TableCell>

                    <TableCell>
                        <Switch/>
                    </TableCell>
                    <TableCell>
                        <div className="flex gap-2 items-center">
                            <MdSettingsBackupRestore className="text-[23px] text-blue-600 cursor-pointer"/>
                            <FiEdit className="text-[18px] text-amber-700 opacity-60 font-bold cursor-pointer"/>
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Exterior Inspection</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0.00</TableCell>
                    <TableCell>0.00</TableCell>
                    <TableCell>Prep for Paint - Heavy - Exterior Wall - Vinyl Siding - 1st Story - Includes
                        Scrapping/Sanding - over 45 SF - Per SF</TableCell>

                    <TableCell>
                        <Switch/>
                    </TableCell>

                    <TableCell>
                        <Switch/>
                    </TableCell>
                    <TableCell>
                        <div className="flex gap-2 items-center">
                            <MdSettingsBackupRestore className="text-[23px] text-blue-600 cursor-pointer"/>
                            <FiEdit className="text-[18px] text-amber-700 opacity-60 font-bold cursor-pointer"/>
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Exterior Inspection</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0.00</TableCell>
                    <TableCell>0.00</TableCell>
                    <TableCell>Prep for Paint - Heavy - Exterior Wall - Vinyl Siding - 1st Story - Includes
                        Scrapping/Sanding - over 45 SF - Per SF</TableCell>

                    <TableCell>
                        <Switch/>
                    </TableCell>

                    <TableCell>
                        <Switch/>
                    </TableCell>
                    <TableCell>
                        <div className="flex gap-2 items-center">
                            <MdSettingsBackupRestore className="text-[23px] text-blue-600 cursor-pointer"/>
                            <FiEdit className="text-[18px] text-amber-700 opacity-60 font-bold cursor-pointer"/>
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Exterior Inspection</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0.00</TableCell>
                    <TableCell>0.00</TableCell>
                    <TableCell>Prep for Paint - Heavy - Exterior Wall - Vinyl Siding - 1st Story - Includes
                        Scrapping/Sanding - over 45 SF - Per SF</TableCell>

                    <TableCell>
                        <Switch/>
                    </TableCell>

                    <TableCell>
                        <Switch/>
                    </TableCell>
                    <TableCell>
                        <div className="flex gap-2 items-center">
                            <MdSettingsBackupRestore className="text-[23px] text-blue-600 cursor-pointer"/>
                            <FiEdit className="text-[18px] text-amber-700 opacity-60 font-bold cursor-pointer"/>
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Exterior Inspection</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0.00</TableCell>
                    <TableCell>0.00</TableCell>
                    <TableCell>Prep for Paint - Heavy - Exterior Wall - Vinyl Siding - 1st Story - Includes
                        Scrapping/Sanding - over 45 SF - Per SF</TableCell>

                    <TableCell>
                        <Switch/>
                    </TableCell>

                    <TableCell>
                        <Switch/>
                    </TableCell>
                    <TableCell>
                        <div className="flex gap-2 items-center">
                            <MdSettingsBackupRestore className="text-[23px] text-blue-600 cursor-pointer"/>
                            <FiEdit className="text-[18px] text-amber-700 opacity-60 font-bold cursor-pointer"/>
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Exterior Inspection</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0.00</TableCell>
                    <TableCell>0.00</TableCell>
                    <TableCell>Prep for Paint - Heavy - Exterior Wall - Vinyl Siding - 1st Story - Includes
                        Scrapping/Sanding - over 45 SF - Per SF</TableCell>

                    <TableCell>
                        <Switch/>
                    </TableCell>

                    <TableCell>
                        <Switch/>
                    </TableCell>
                    <TableCell>
                        <div className="flex gap-2 items-center">
                            <MdSettingsBackupRestore className="text-[23px] text-blue-600 cursor-pointer"/>
                            <FiEdit className="text-[18px] text-amber-700 opacity-60 font-bold cursor-pointer"/>
                        </div>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
};

export default TasksTable;