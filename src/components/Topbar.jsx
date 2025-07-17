// src/components/Topbar.jsx
export default function Topbar() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div>
        <span className="text-gray-600">Hi, User</span>
      </div>
    </header>
  );
}
