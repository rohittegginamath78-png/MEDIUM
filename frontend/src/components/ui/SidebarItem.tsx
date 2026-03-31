import { Link } from "react-router-dom";

export function SidebarItem({
  to,
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
  to:string;
}) {
  return (
    <Link to={to} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#2a2a2a] transition cursor-pointer">
      {icon}
      <span className="text-base">{label}</span>
    </Link>
  );
}