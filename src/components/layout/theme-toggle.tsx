import { useTheme } from 'next-themes';
import { type ReactElement, useEffect, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function ThemeToggle(): ReactElement | null {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="ml-1 flex h-10 w-10 items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray-100 sm:ml-4 dark:hover:bg-gray-800"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      type="button"
    >
      {isDark ? (
        <HiSun className="h-5 w-5 text-yellow-500" />
      ) : (
        <HiMoon className="h-5 w-5 text-slate-800" />
      )}
    </button>
  );
}
