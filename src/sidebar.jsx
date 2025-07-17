// src/sidebar.jsx
export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4 space-y-4">
      <h2 className="text-xl font-semibold">CleanUI</h2>
      <nav className="space-y-2">
        <a href="#" className="block text-xl font-semibold hover:bg-gray-800 p-2 rounded">Dashboard</a>
        <a href="#" className="block text-xl font-semibold hover:bg-gray-800 p-2 rounded">Analytics</a>
        <a href="#" className="block text-xl font-semibold hover:bg-gray-800 p-2 rounded">Users</a>
        <a href="#" className="block text-xl font-semibold hover:bg-gray-800 p-2 rounded">Settings</a>
        <a href="#" className="block text-xl font-semibold hover:bg-gray-800 p-2 rounded">Logout</a>
      </nav>
    </aside>
  );
}
