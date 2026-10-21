'use client';

import React, { useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark';

// The inline script in layout.tsx sets the `dark` class before paint, so the <html> class is the source of truth.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function getServerSnapshot(): Theme | null {
  return null;
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem('aura-theme', next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit
    }
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  if (!theme) {
    return <div className="w-9 h-9 rounded-full p-2.5 text-transparent" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full text-body hover:text-ink hover:bg-ink/5 transition-colors"
      aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
