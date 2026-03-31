import {
  Home,
  Bookmark,
  User,
  LogOut,
} from "lucide-react";
import { SidebarItem } from "./SidebarItem";
export function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 rounded-xl bg-surface border-r border-border flex flex-col justify-between p-4">

      {/* TOP */}
      <div>
        <h1 className="text-lg font-semibold mb-6 ">Blog Zone</h1>
        <nav className="space-y-2 border-border">

          <SidebarItem icon={<Home size={21} />} label="Home" to="/blogs"/>
          <SidebarItem icon={<Bookmark size={20} />} label="Bookmark" to="/bookmark" />
          <SidebarItem icon={<User size={20} />} label="Profile" to="profile"/>

        </nav>
      </div>

      {/* BOTTOM */}
      <button className="flex items-center gap-3 px-4 py-3 rounded-lg">
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
}
