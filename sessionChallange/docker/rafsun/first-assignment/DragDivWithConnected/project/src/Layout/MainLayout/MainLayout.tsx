import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export default function MainLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <Outlet />
    </div>
  );
}
