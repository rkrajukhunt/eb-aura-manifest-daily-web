import React from 'react';
import { Skeleton } from '@/components/Skeleton';

export default function Loading() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 max-w-7xl mx-auto space-y-12">
      {/* Hero Skeleton */}
      <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
        <Skeleton className="h-8 w-48 rounded-full" />
        <Skeleton className="h-16 w-4/5 rounded-2xl" />
        <Skeleton className="h-6 w-3/5" />
        <div className="flex gap-4 pt-4">
          <Skeleton className="h-12 w-40 rounded-full" />
          <Skeleton className="h-12 w-40 rounded-full" />
        </div>
      </div>

      {/* Card Skeleton */}
      <div className="max-w-4xl mx-auto">
        <Skeleton className="h-96 w-full rounded-3xl" />
      </div>
    </main>
  );
}
