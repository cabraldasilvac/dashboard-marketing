"use client";
import { Bell, Search, User as UserIcon } from "@/components/ui/icons";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-indigo-600">SpotMKT</h1>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Search className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <Bell className="h-5 w-5 text-gray-500" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <UserIcon className="h-4 w-4 text-indigo-600" />
            </div>
            <span className="text-sm font-medium hidden md:inline">
              spotmkt
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
