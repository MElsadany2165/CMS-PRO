import React, { useState } from 'react';
import { TrendingUp, Users, Eye, MessageSquare, Calendar, ArrowUp, ArrowDown } from 'lucide-react';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const metrics = [
    {
      name: 'Page Views',
      value: '84,290',
      change: '+23%',
      trend: 'up',
      icon: Eye,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/50'
    },
    {
      name: 'Unique Visitors',
      value: '12,483',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/50'
    },
    {
      name: 'Comments',
      value: '1,247',
      change: '+8%',
      trend: 'up',
      icon: MessageSquare,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/50'
    },
    {
      name: 'Bounce Rate',
      value: '34.2%',
      change: '-5%',
      trend: 'down',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/50'
    },
  ];

  const topPosts = [
    {
      title: 'Getting Started with React Hooks',
      views: 12480,
      engagement: '8.5%',
      date: '2025-01-07'
    },
    {
      title: 'Advanced TypeScript Patterns',
      views: 8920,
      engagement: '6.2%',
      date: '2025-01-06'
    },
    {
      title: 'Building Responsive Layouts',
      views: 7340,
      engagement: '9.1%',
      date: '2025-01-05'
    },
    {
      title: 'Modern CSS Grid Techniques',
      views: 5680,
      engagement: '7.3%',
      date: '2025-01-04'
    },
    {
      title: 'JavaScript Performance Tips',
      views: 4920,
      engagement: '5.8%',
      date: '2025-01-03'
    },
  ];

  const referralSources = [
    { source: 'Google', visits: 45820, percentage: 54.2 },
    { source: 'Direct', visits: 23140, percentage: 27.4 },
    { source: 'Social Media', visits: 8960, percentage: 10.6 },
    { source: 'Referral', visits: 4280, percentage: 5.1 },
    { source: 'Email', visits: 2300, percentage: 2.7 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Track your website performance and user engagement
          </p>
        </div>

        {/* Time Range Selector */}
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-gray-400" />
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
            <option value="1y">Last Year</option>
          </select>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.name} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`${metric.bgColor} p-2 rounded-lg`}>
                  <metric.icon className={`w-5 h-5 ${metric.color}`} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{metric.name}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
                </div>
              </div>
              <div className={`flex items-center space-x-1 ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend === 'up' ? (
                  <ArrowUp className="w-4 h-4" />
                ) : (
                  <ArrowDown className="w-4 h-4" />
                )}
                <span className="text-sm font-medium">{metric.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Performing Posts */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Top Performing Posts</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topPosts.map((post, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {post.date}
                      </p>
                    </div>
                    <div className="flex items-center space-x-6 ml-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {post.views.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">views</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-green-600">
                          {post.engagement}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">engagement</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Traffic Sources</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {referralSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {source.source}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {source.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${source.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {source.visits.toLocaleString()} visits
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Stats</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Avg. Session Duration</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">4:32</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Pages per Session</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">3.2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">New vs Returning</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">68% / 32%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Mobile Traffic</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">61%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;