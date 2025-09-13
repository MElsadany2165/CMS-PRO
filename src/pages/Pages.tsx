import React from 'react';
import { Plus, Edit2, Trash2, Globe, Eye } from 'lucide-react';

const Pages: React.FC = () => {
  const pages = [
    { id: 1, title: 'Home', slug: '/', status: 'published', views: 15420, lastModified: '2025-01-07' },
    { id: 2, title: 'About Us', slug: '/about', status: 'published', views: 3200, lastModified: '2025-01-05' },
    { id: 3, title: 'Contact', slug: '/contact', status: 'published', views: 1800, lastModified: '2025-01-03' },
    { id: 4, title: 'Privacy Policy', slug: '/privacy', status: 'draft', views: 0, lastModified: '2025-01-02' },
    { id: 5, title: 'Terms of Service', slug: '/terms', status: 'published', views: 890, lastModified: '2025-01-01' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Pages</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your website pages and content
          </p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
          <Plus className="w-4 h-4" />
          <span>New Page</span>
        </button>
      </div>

      {/* Pages Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">Title</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">Slug</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">Views</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">Last Modified</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {pages.map((page) => (
                <tr key={page.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900 dark:text-white">{page.title}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">{page.slug}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      page.status === 'published' 
                        ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300'
                        : 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300'
                    }`}>
                      {page.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                      <Eye className="w-4 h-4" />
                      <span>{page.views.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-400">
                    {page.lastModified}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pages;