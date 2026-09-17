import React from 'react';

export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-white/5 animate-shimmer ${className}`}
    />
  );
}

export function LegalSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-8 animate-pulse">
      <Skeleton className="h-12 w-3/5" />
      <Skeleton className="h-5 w-1/4" />
      <div className="space-y-3 pt-6">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
      <div className="pt-10 space-y-6">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-24 w-full" />
      </div>
    </div>
  );
}
