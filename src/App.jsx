import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Playground from './pages/Playground';

function App() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-900">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white shadow-md p-4">
          <h2 className="text-xl font-bold mb-6">CleanUI</h2>
          <nav className="space-y-2">
            <Link to="/" className="block text-blue-600 hover:underline">Dashboard</Link>
            <Link to="/playground" className="block text-blue-600 hover:underline">Playground</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/playground" element={<Playground />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
