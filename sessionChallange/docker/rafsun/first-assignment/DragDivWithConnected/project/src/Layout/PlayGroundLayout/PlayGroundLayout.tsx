import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export default function PlayGroundLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Outlet />
       <Sidebar />
    </div>
  );
}
