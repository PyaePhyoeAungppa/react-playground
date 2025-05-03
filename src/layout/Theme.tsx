import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function Theme() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 bg-gray-200 dark:bg-gray-900 p-4">
        <SideBar />
      </div>
      <div className="w-3/4 bg-gray-100 dark:bg-gray-800 p-4 flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
export default Theme;
