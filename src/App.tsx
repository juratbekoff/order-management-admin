import {Route, Routes} from "react-router-dom";
import {AuthLayout, RootLayout} from "./layouts";
import {NotFound, OrderInfo, WorkOrders} from "./pages";
import {AuthChecker} from "./middlewares";
import {SettingsLayout} from "@/layouts";

import {Admins, Workers} from "@/pages/staff/index";
import {Roles} from "@/pages/settings/index";
import Test from "@/pages/Test.tsx";

function App() {
    return (
        <Routes>
            {/* Root layout */}
            <Route
                element={
                    <AuthChecker>
                        <RootLayout/>
                    </AuthChecker>
                }
            >
                <Route index element={<WorkOrders/>}/>
                <Route path={"/order-info/:reportId"} element={<OrderInfo/>}/>

                <Route path={"/staff"} element={<Test/>}>
                    <Route path={"workers"} element={<Workers/>}/>
                    <Route path={"admins"} element={<Admins/>}/>
                </Route>

                <Route path={"/settings"} element={<SettingsLayout/>}>
                    <Route path={"roles"} element={<Roles/>}/>
                </Route>

                <Route path="*" element={<NotFound/>}/>
            </Route>

            {/* Auth layout */}
            <Route path="/auth" element={<AuthLayout/>}/>
        </Routes>
    );
}

export default App;
