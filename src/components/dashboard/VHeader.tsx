import React from "react";
import { NavLink } from "react-router-dom"; // Importing NavLink
import {
  Home,
  Settings,
  File,
  Info,
  HelpCircle,
  Image,
  Layers,
  Clock,
  BarChart3,
} from "lucide-react";

const VHeader: React.FC = () => {
  return (
    <div className="w-72 bg-blue-600 text-white flex flex-col">
      <nav className="flex-grow p-4">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard"
              end // Ensures exact match
              className={({ isActive }) =>
                `flex items-center space-x-3 text-lg px-4 py-2 rounded-md ${
                  isActive
                    ? "text-blue-600 bg-white"
                    : "text-white hover:bg-blue-700"
                }`
              }
            >
              <Home className="w-6 h-6" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/optimizeimage"
              className={({ isActive }) =>
                `flex items-center space-x-3 text-lg px-4 py-2 rounded-md ${
                  isActive
                    ? "text-blue-600 bg-white"
                    : "text-white hover:bg-blue-700"
                }`
              }
            >
              <Image className="w-6 h-6" />
              <span>Optimize Image</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/batchcompress"
              className={({ isActive }) =>
                `flex items-center space-x-3 text-lg px-4 py-2 rounded-md ${
                  isActive
                    ? "text-blue-600 bg-white"
                    : "text-white hover:bg-blue-700"
                }`
              }
            >
              <Layers className="w-6 h-6" />
              <span>Batch Compress</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/compresspdf"
              className={({ isActive }) =>
                `flex items-center space-x-3 text-lg px-4 py-2 rounded-md ${
                  isActive
                    ? "text-blue-600 bg-white"
                    : "text-white hover:bg-blue-700"
                }`
              }
            >
              <File className="w-6 h-6" />
              <span>Compressed PDF</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/history"
              className={({ isActive }) =>
                `flex items-center space-x-3 text-lg px-4 py-2 rounded-md ${
                  isActive
                    ? "text-blue-600 bg-white"
                    : "text-white hover:bg-blue-700"
                }`
              }
            >
              <Clock className="w-6 h-6" />
              <span>History</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/analytics"
              className={({ isActive }) =>
                `flex items-center space-x-3 text-lg px-4 py-2 rounded-md ${
                  isActive
                    ? "text-blue-600 bg-white"
                    : "text-white hover:bg-blue-700"
                }`
              }
            >
              <BarChart3 className="w-6 h-6" />
              <span>Analytics</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/settings"
              className={({ isActive }) =>
                `flex items-center space-x-3 text-lg px-4 py-2 rounded-md ${
                  isActive
                    ? "text-blue-600 bg-white"
                    : "text-white hover:bg-blue-700"
                }`
              }
            >
              <Settings className="w-6 h-6" />
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/about"
              className={({ isActive }) =>
                `flex items-center space-x-3 text-lg px-4 py-2 rounded-md ${
                  isActive
                    ? "text-blue-600 bg-white"
                    : "text-white hover:bg-blue-700"
                }`
              }
            >
              <Info className="w-6 h-6" />
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/help"
              className={({ isActive }) =>
                `flex items-center space-x-3 text-lg px-4 py-2 rounded-md ${
                  isActive
                    ? "text-blue-600 bg-white"
                    : "text-white hover:bg-blue-700"
                }`
              }
            >
              <HelpCircle className="w-6 h-6" />
              <span>Help</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default VHeader;
