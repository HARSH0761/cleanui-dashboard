import React from 'react';
import Button from '../components/Button';
import DashboardStats from '../components/DashboardStats';
import RecentActivity from '../components/RecentActivity';

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <Button>Click Me</Button>

      <div className="mt-6">
        <DashboardStats />
      </div>

      <div className="mt-6">
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;
