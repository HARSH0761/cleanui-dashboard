// src/components/DashboardStats.jsx
export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-xl p-4 shadow">
        <h3 className="text-gray-500 text-sm">Users</h3>
        <p className="text-xl font-bold">1,200</p>
      </div>
      <div className="bg-white rounded-xl p-4 shadow">
        <h3 className="text-gray-500 text-sm">Sales</h3>
        <p className="text-xl font-bold">$15,000</p>
      </div>
      <div className="bg-white rounded-xl p-4 shadow">
        <h3 className="text-gray-500 text-sm">Visitors</h3>
        <p className="text-xl font-bold">8,430</p>
      </div>
      <div className="bg-white rounded-xl p-4 shadow">
        <h3 className="text-gray-500 text-sm">Orders</h3>
        <p className="text-xl font-bold">320</p>
      </div>
    </div>
  );
}
