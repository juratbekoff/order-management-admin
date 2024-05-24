import {HiOutlineUsers} from "react-icons/hi2";
import {MdOutlineWorkOutline} from "react-icons/md";
import {IoSettingsOutline} from "react-icons/io5";

export const sidebarItems = [
    {
        id: 1,
        label: "Orders",
        href: "/",
        icon: <MdOutlineWorkOutline/>,
    },
    {
        id: 2,
        label: "Staff",
        href: "/staff/workers",
        icon: <HiOutlineUsers/>,
    },
    {
        id: 3,
        label: "Settings",
        href: "/settings/roles",
        icon: <IoSettingsOutline/>,
    },
];

export const PermissionsData = [
    {
        id: 1,
        name: "DASHBOARD",
        allowedAccesses: [
            "WRITE",
            "READ",
        ]
    },
    {
        id: 2,
        name: "WORK_ORDER",
        allowedAccesses: [
            "READ",
            "EDIT"
        ]
    },
    {
        id: 3,
        name: "ADMINS_MANAGEMENT",
        allowedAccesses: [
            "WRITE",
            "READ",
            "EDIT",
            "DELETE"
        ]
    },
    {
        id: 4,
        name: "WORKERS_MANAGEMENT",
        allowedAccesses: [
            "WRITE",
            "READ",
            "EDIT",
            "DELETE"
        ]
    },
    {
        id: 5,
        name: "PRICE",
        allowedAccesses: [
            "READ"
        ]
    },
    {
        id: 6,
        name: "TASK",
        allowedAccesses: [
            "READ",
            "EDIT"
        ]
    }
];


export const roleInfo = {
    id: 1,
    name: "Ceo",
    createdAt: "2024-05-11T07:34:57.285Z",
    updatedAt: "2024-05-11T07:36:11.475Z",
    permissions: [
        {
            rolePermId: 1,
            roleId: 1,
            permId: 1,
            accessibility: [
                "READ"
            ]
        },
        {
            rolePermId: 2,
            roleId: 1,
            permId: 2,
            accessibility: [
                "READ",
                "EDIT"
            ]
        }
    ]
};

