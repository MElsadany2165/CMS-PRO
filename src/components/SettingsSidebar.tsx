import React from 'react';
import { X, Moon, Sun, Monitor, User, Shield, Palette, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SettingsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsSidebar: React.FC<SettingsSidebarProps> = ({ isOpen, onClose }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      )}
      
      {/* Settings Sidebar */}
      <div className={`
        fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Settings</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8 overflow-y-auto h-full pb-20">
          {/* Theme Settings */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4 flex items-center">
              <Palette className="w-4 h-4 mr-2" />
              Appearance
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Dark Mode</span>
                <button
                  onClick={toggleTheme}
                  className={`
                    relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
                    transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                    ${isDark ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'}
                  `}
                >
                  <span
                    className={`
                      pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 
                      transition duration-200 ease-in-out
                      ${isDark ? 'translate-x-5' : 'translate-x-0'}
                    `}
                  />
                </button>
              </div>
              
              <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                <Sun className="w-4 h-4" />
                <span>Light</span>
                <div className="flex-1 border-t border-gray-200 dark:border-gray-600"></div>
                <span>Dark</span>
                <Moon className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Display Settings */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4 flex items-center">
              <Monitor className="w-4 h-4 mr-2" />
              Display
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Font Size
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Small</option>
                  <option selected>Medium</option>
                  <option>Large</option>
                </select>
              </div>
              
              <div>
                <label className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Sidebar Position
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option selected>Left</option>
                  <option>Right</option>
                </select>
              </div>
            </div>
          </div>

          {/* User Preferences */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4 flex items-center">
              <User className="w-4 h-4 mr-2" />
              Preferences
            </h3>
            
            <div className="space-y-4">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Email notifications</span>
              </label>
              
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Push notifications</span>
              </label>
              
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Auto-save drafts</span>
              </label>
            </div>
          </div>

          {/* Language & Region */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4 flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Language & Region
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Language
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option selected>English (US)</option>
                  <option>English (UK)</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
              
              <div>
                <label className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Timezone
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option selected>UTC-05:00 Eastern</option>
                  <option>UTC-08:00 Pacific</option>
                  <option>UTC+00:00 GMT</option>
                  <option>UTC+01:00 CET</option>
                </select>
              </div>
            </div>
          </div>

          {/* Security */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4 flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Security
            </h3>
            
            <div className="space-y-4">
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
                Change Password
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
                Two-Factor Authentication
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
                Active Sessions
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsSidebar;