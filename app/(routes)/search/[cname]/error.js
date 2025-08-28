'use client';

import React from 'react';

export default function Error({ error, reset }) {
  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl text-red-600 mb-4">Something went wrong!</h2>
      <p>{error?.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 bg-lime-600 text-white px-4 py-2 rounded"
      >
        Try again
      </button>
    </div>
  );
}
