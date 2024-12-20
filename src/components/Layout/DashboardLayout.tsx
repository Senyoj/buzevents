import React from "react";
import { FaBars, FaCalendar, FaCogs, FaHome } from "react-icons/fa";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen bg-neutral-50">
      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-white 
          border-r border-neutral-200 shadow-sm 
          transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0
        `}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-neutral-200">
            <h2 className="text-xl font-semibold text-neutral-800">
              Dashboard
            </h2>
          </div>
          <nav className="flex-grow p-4">
            <ul className="space-y-2">
              <SidebarItem
                icon={<FaHome className="w-5 h-5" />}
                href="/dashboard"
                label="Overview"
              />
              <SidebarItem
                icon={<FaCalendar className="w-5 h-5" />}
                href="/dashboard/events"
                label="Events"
              />
              <SidebarItem
                icon={<FaCogs className="w-5 h-5" />}
                href="/dashboard/settings"
                label="Settings"
              />
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex flex-col flex-1 md:ml-64">
        {/* Mobile header with menu toggle */}
        <header className="sticky top-0 z-30 md:hidden bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-neutral-600 hover:text-neutral-800"
            >
              <FaBars className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold text-neutral-800">
              Dashboard
            </h1>
          </div>
        </header>

        {/* Main content */}
        <main className="p-6 bg-neutral-50">{children}</main>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

// Sidebar Item Component
const SidebarItem: React.FC<{
  icon: React.ReactNode;
  href: string;
  label: string;
}> = ({ icon, href, label }) => (
  <li>
    <a
      href={href}
      className="
        flex items-center space-x-3 
        px-3 py-2 rounded-md 
        text-neutral-600 hover:bg-neutral-100 
        hover:text-neutral-800 
        transition-colors duration-200
      "
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </a>
  </li>
);

export default DashboardLayout;
