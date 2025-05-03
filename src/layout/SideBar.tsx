import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { LogOut } from "lucide-react";

function SideBar() {
  const { user } = useAuth();

  const handleLogout = async () => {

  }

  return (
    <div className="h-full w-full p-4">
      <span>{user?.email ?? "Loading..."}</span>

      <Button onClick={handleLogout}>
        <LogOut className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      </Button>
    </div>
  );
}

export default SideBar;
