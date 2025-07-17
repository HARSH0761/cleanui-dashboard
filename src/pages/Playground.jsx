import React from 'react';
import Button from '../components/Button';

const Playground = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Component Playground</h1>
      <div className="space-x-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </div>
  );
};

export default Playground;
