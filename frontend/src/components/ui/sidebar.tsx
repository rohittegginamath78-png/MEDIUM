import {
  Home,
  Bookmark,
  User,
  BarChart3,
  LogOut,
} from "lucide-react";
import { SidebarItem } from "./SidebarItem";
export function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 rounded-xl bg-surface border-r border-border flex flex-col justify-between p-4">

      {/* TOP */}
      <div>
        <h1 className="text-lg font-semibold mb-6 ">Blog Zone</h1>
        <nav className="space-y-2 border-t border-border">

          <SidebarItem icon={<Home size={20} />} label="Home" />
          <SidebarItem icon={<Bookmark size={20} />} label="Bookmark" />
          <SidebarItem icon={<User size={20} />} label="Profile" />
          <SidebarItem icon={<BarChart3 size={20} />} label="Stats" />

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