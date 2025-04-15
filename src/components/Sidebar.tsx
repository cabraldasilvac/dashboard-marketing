"use client";

import Link from "next/link";
import {
  BarChart3,
  Calendar,
  Home,
  Mail,
  Settings,
  Zap,
} from "@/components/ui/icons";
export default function Sidebar() {
  const navItems = [
    { name: "Dashboard", icon: Home, active: true },
    { name: "Campanhas", icon: Zap },
    { name: "Relatórios", icon: BarChart3 },
    { name: "Mensagens", icon: Mail },
    { name: "Calendário", icon: Calendar },
    { name: "Configurações", icon: Settings },
  ];

  return (
    <aside className="hidden md:block w-64 bg-white shadow-sm p-4">
      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href="#"
            className={`flex items-center px-4 py-3 rounded-lg ${item.active ? "bg-indigo-50 text-indigo-600" : "text-gray-600 hover:bg-gray-50"}`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
