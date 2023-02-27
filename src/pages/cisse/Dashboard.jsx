import React from "react";

import BarChart from "../../components/cisse/BarChart";
import RecentOrders from "../../components/cisse/RecentOrders";
import TopCards from "../../components/cisse/TopCards";
import SideBar from "../../components/Layout/SideBar";

export default function Dashboard() {
    return (
        <div>
            <SideBar />
            <TopCards />
            <div className="md:grid-cols-3 grid gap-4 grid-cols-1">
                <BarChart />
                <RecentOrders />
            </div>
        </div>
    );
}
