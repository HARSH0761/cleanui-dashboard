// src/components/RecentActivity.jsx
export default function RecentActivity() {
  const activities = [
    { id: 1, user: 'Alice', action: 'Logged in', time: '2 mins ago' },
    { id: 2, user: 'Bob', action: 'Placed an order', time: '10 mins ago' },
    { id: 3, user: 'Charlie', action: 'Signed up', time: '30 mins ago' },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-600">
            <th className="py-2">User</th>
            <th className="py-2">Action</th>
            <th className="py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((a) => (
            <tr key={a.id} className="border-t">
              <td className="py-2">{a.user}</td>
              <td className="py-2">{a.action}</td>
              <td className="py-2 text-sm text-gray-500">{a.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
