import React, { ViewTransition } from 'react';

// Each page settles out and rises in on navigation (globals.css, .page-fade). It lives in the pages,
// not the layout, because layouts persist across navigations and would never enter or exit.
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-fade" exit="page-fade" default="none">
      {children}
    </ViewTransition>
  );
}
