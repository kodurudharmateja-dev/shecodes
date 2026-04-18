import React, { useState } from "react";
import { Menu, Search, Mic, Camera, User } from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 bg-white shadow">
        
        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Menu />
        </button>

        {/* Title */}
        <h1 className="text-xl font-bold">THIS CAN</h1>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <User />
          <div className="text-sm">
            <p>Username</p>
            <p className="text-gray-500">email@example.com</p>
            <p className="text-gray-500">+91 9876543210</p>
            <button className="text-red-500">Logout</button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {menuOpen && (
        <div className="absolute top-16 left-0 bg-white shadow p-4 w-60">
          <ul className="space-y-2">
            <li>Saved</li>
            <li>Likes</li>
            <li>Wishlist</li>
            <li>Reviews</li>
            <li>Orders</li>
            <li>Search History</li>
          </ul>
        </div>
      )}

      {/* Search */}
      <div className="flex justify-center mt-10">
        <div className="flex items-center bg-white shadow rounded-full px-4 py-2 w-2/3">
          <Search className="mr-2" />
          <input
            type="text"
            placeholder="Paste product link or search..."
            className="flex-1 outline-none"
          />
          <Mic className="mx-2 cursor-pointer" />
          <Camera className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}