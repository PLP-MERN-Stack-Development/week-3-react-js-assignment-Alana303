// src/pages/Home.jsx
import React from 'react';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white">
        🏡 Welcome to the Home Page
      </h1>

      <Card title="Reusable Buttons">
        <div className="flex flex-wrap gap-4 justify-center">
          <Button label="Primary" variant="primary" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Danger" variant="danger" />
        </div>
      </Card>
    </div>
  );
}
