import React, { useState, useEffect } from 'react';

interface ThemeControllerProps {
  className?: string;
}

const ThemeController: React.FC<ThemeControllerProps> = ({ className = '' }) => {
  const [theme, setTheme] = useState<string>('light');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Available themes based on design system
  const themes = [
    "light",
    "dark",
    "cupcake",
    "emerald",
    "pastel"
];

  useEffect(() => {
    // Get theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('daisyui-theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    setIsOpen(false);
    localStorage.setItem('daisyui-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const formatThemeName = (themeName: string): string => {
    return themeName.charAt(0).toUpperCase() + themeName.slice(1);
  };

  return (
    <div className={`dropdown dropdown-end ${className}`}>
      <div 
        tabIndex={0} 
        role="button" 
        className="btn btn-ghost btn-circle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Theme selector"
      >
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5z"
          ></path>
        </svg>
      </div>
      {isOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-200 rounded-box z-[1] w-52 p-2 shadow-2xl"
        >
          {themes.map((themeName) => (
            <li key={themeName}>
              <button
                type="button"
                className={`${theme === themeName ? 'active' : ''}`}
                onClick={() => handleThemeChange(themeName)}
              >
                <span className="flex items-center gap-2">
                  {theme === themeName && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                    </svg>
                  )}
                  {formatThemeName(themeName)}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThemeController;