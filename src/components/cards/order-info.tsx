import {Input} from "@/components/ui/input.tsx";
import TextArea from "@/components/ui/text-area.tsx";
import {TasksTable} from "@/components/tables";
import {Button} from "@/components/ui/button.tsx";
import {AiOutlineDelete} from "react-icons/ai";

const OrderInfoCard = () => {
    return (
        <div className={"flex flex-col gap-5 text-sm"}>
            <div className={"grid grid-cols-2 gap-5 max-xl:grid-cols-1"}>
                <div className={"flex flex-col gap-2 bg-white rounded shadow p-3"}>
                    <div className={"flex justify-between items-center"}>
                        <h1>Wo:</h1>

                        <div className={"w-2/3"}>
                            <Input defaultValue={"M14882155"}
                                   className={"bg-[#F2F2F2] h-8 rounded-sm shadow-none"}/>
                        </div>
                    </div>

                    <hr/>
                    <div className={"flex justify-between items-center"}>
                        <h1>PPW:</h1>

                        <div className={"w-2/3"}>
                            <Input defaultValue={"19442"} className={"bg-[#F2F2F2] h-8 rounded-sm shadow-none"}/>
                        </div>
                    </div>

                    <hr/>
                    <div className={"flex justify-between items-center"}>
                        <h1>Work Type:</h1>

                        <div className={"w-2/3"}>
                            <Input defaultValue={"Bid Approval"}
                                   className={"bg-[#F2F2F2] h-8 rounded-sm shadow-none"}/>
                        </div>
                    </div>

                    <hr/>
                    <div className={"flex justify-between items-center"}>
                        <h1>Address:</h1>

                        <div className={"w-2/3"}>
                            <TextArea defaultValue={"260 SYLVAN LN CREVE COEUR, IL 61610"}
                                      className={"bg-[#F2F2F2] h-8 rounded-sm shadow-none"}/>
                        </div>
                    </div>

                    <hr/>
                    <div className={"flex justify-between items-center"}>
                        <h1>Client Company:</h1>

                        <div className={"w-2/3"}>
                            <Input defaultValue={"MCS N"} className={"bg-[#F2F2F2] h-8 rounded-sm shadow-none"}/>
                        </div>
                    </div>

                    <hr/>
                    <div className={"flex justify-between items-center"}>
                        <h1>Received date:</h1>

                        <div className={"w-2/3"}>
                            <Input defaultValue={"February 9, 2024"}
                                   className={"bg-[#F2F2F2] h-8 rounded-sm shadow-none"}/>

                        </div>
                    </div>

                    <hr/>
                    <div className={"flex justify-between items-center"}>
                        <h1>Due date:</h1>

                        <div className={"w-2/3"}>
                            <Input defaultValue={"February 27, 2024"}
                                   className={"bg-[#F2F2F2] h-8 rounded-sm shadow-none"}/>

                        </div>
                    </div>

                    <hr/>
                    <div className={"flex justify-between items-center"}>
                        <h1>Start date:</h1>

                        <div className={"w-2/3"}>
                            <Input defaultValue={"April 13, 2024"}
                                   className={"bg-[#F2F2F2] h-8 rounded-sm shadow-none"}/>
                        </div>
                    </div>

                    <hr/>
                    <div className={"flex justify-between items-center"}>
                        <h1>Coordinates:</h1>

                        <div className={"w-2/3"}>
                            <Input defaultValue={"41.3350474220, 69.37182113015"}
                                   className={"bg-[#F2F2F2] h-8 rounded-sm shadow-none"}/>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col gap-2 bg-white rounded shadow p-3"}>
                    <div className={"flex justify-between items-center"}>
                        <h1>Loan Info:</h1>

                        <div className={"w-2/3"}>
                            <Input defaultValue={"*****9214 FHA (11)"}
                                   className={"bg-[#F2F2F2] h-8 rounded-sm shadow-none"}/>
                        </div>
                    </div>

                    <hr/>
                    <div className={"flex justify-between items-center"}>
                        <h1>Mortgager:</h1>

                        <div className={"w-2/3"}>
                            <Input defaultValue={"KRISTINA WAID"}
                                   className={"bg-[#F2F2F2] h-8 rounded-sm shadow-none"}/>
                        </div>
                    </div>

                    <hr/>
                    <div className={"flex justify-between items-center"}>
                        <h1>Customer:</h1>

                        <div className={"w-2/3"}>
                            <Input defaultValue={"552"}
                                   className={"bg-[#F2F2F2] h-8 rounded-sm shadow-none"}/>
                        </div>
                    </div>

                    <hr/>
                    <div className={"flex justify-between items-center"}>
                        <h1>Broker Info:</h1>

                        <div className={"w-2/3"}>
                            <TextArea className={"bg-[#F2F2F2] h-8 rounded-sm shadow-none"}/>
                        </div>
                    </div>


                    <hr/>
                    <div className={"flex justify-between items-center"}>
                        <h1>Lot size:</h1>

                        <div className={"w-2/3"}>
                            <Input defaultValue={"20909 Lawn: 19777"}
                                   className={"bg-[#F2F2F2] h-8 rounded-sm shadow-none"}/>
                        </div>
                    </div>

                    <hr/>
                    <div className={"flex justify-between items-center"}>
                        <h1>Lock Code:</h1>

                        <div className={"w-2/3"}>
                            <Input defaultValue={"5723"}
                                   className={"bg-[#F2F2F2] h-8 rounded-sm shadow-none"}/>
                        </div>
                    </div>

                    <hr/>
                    <div className={"flex justify-between items-center"}>
                        <h1>Key Code:</h1>

                        <div className={"w-2/3"}>
                            <Input defaultValue={"35241/A389 Padlock/Front"}
                                   className={"bg-[#F2F2F2] h-8 rounded-sm shadow-none"}/>
                        </div>
                    </div>


                    <hr/>
                    <div className={"flex justify-between items-center"}>
                        <h1>Comments:</h1>

                        <div className={"w-2/3"}>
                            <TextArea className={"bg-[#F2F2F2] min-h-20 rounded-sm shadow-none"}
                                      defaultValue={`Current keycode(s), location(s) and/or lockbox code are: 35241/A389 Padlock/Front/Other. ***Bid Cut*** Work Order Based on Approved Lower Amount from WO#M14872922`}/>
                        </div>
                    </div>

                </div>
            </div>

            <div className={"flex flex-col gap-5"}>
                <div className={"bg-white rounded shadow p-3 flex flex-col gap-3"}>
                    <span className={"text-base font-medium ml-1"}>Task Items </span>

                    <div className={"bg-white w-full"}>
                        <TasksTable/>
                    </div>
                </div>
            </div>

            <div className={"flex justify-between items-center bg-white rounded shadow p-3"}>
                <div className={"flex flex-col gap-3 w-2/3"}>
                    <span className={"text-base font-medium"}>Assigned Workers</span>

                    <div className={"flex gap-5"}>
                        <div className={"flex items-center gap-1 "}>
                            <span>Juratbek Xudayberganov</span>
                            <AiOutlineDelete className={"text-xl text-destructive cursor-pointer"}/>
                        </div>

                        <div className={"flex items-center gap-1 "}>
                            <span>Juratbek Xudayberganov</span>
                            <AiOutlineDelete className={"text-xl text-destructive cursor-pointer"}/>
                        </div>
                    </div>
                </div>

                <Button>Save changes</Button>
            </div>
        </div>
    )
};

export default OrderInfoCard;