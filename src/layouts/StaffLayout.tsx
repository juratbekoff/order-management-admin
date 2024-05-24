import {Link, Outlet, useLocation} from "react-router-dom";

const StaffLayout = () => {
    const {pathname} = useLocation()

    return (
        <>
            <div className={"bg-white shadow rounded-sm p-3 flex gap-2"}>
                <Link to={"/staff/workers"}
                      className={`${pathname === "/staff/workers" ? "bg-primary text-white" : "bg-primary bg-opacity-10"} px-4 py-1 rounded-sm`}>Workers</Link>
                <Link to={"/staff/admins"}
                      className={`${pathname === "/staff/admins" ? "bg-primary text-white" : "bg-primary bg-opacity-10"} px-4 py-1 rounded-sm`}>Adminstration</Link>
            </div>

            <Outlet/>
        </>
    )
};

export default StaffLayout;