'use client';

import { motion } from 'framer-motion';
import { Users, FolderKanban, TrendingUp, MessageSquare } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    leads: 0,
    projects: 0,
  });

  useEffect(() => {
    // Fetch real stats
    const fetchStats = async () => {
      try {
        const [leadsRes, projectsRes] = await Promise.all([
          fetch('/api/contact/stats'), // I'll need to create this simple helper route or just count
          fetch('/api/projects'),
        ]);
        const leadsData = await leadsRes.json();
        const projectsData = await projectsRes.json();
        setStats({
          leads: leadsData.count || 0,
          projects: projectsData.length || 0,
        });
      } catch (err) {
        console.error('Failed to fetch stats');
      }
    };
    fetchStats();
  }, []);

  const cards = [
    { label: 'Total Leads', value: stats.leads, icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Active Projects', value: stats.projects, icon: FolderKanban, color: 'text-brand-yellow', bg: 'bg-brand-yellow/10' },
    { label: 'New This Week', value: '+3', icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-500/10' },
    { label: 'Response Rate', value: '98%', icon: MessageSquare, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm"
          >
            <div className={`p-3 rounded-xl inline-block ${card.bg} ${card.color} mb-4`}>
              <card.icon size={24} />
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{card.label}</p>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{card.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity Placeholder */}
        <div className="p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl">
          <h3 className="text-xl font-bold dark:text-white mb-6">Recent Enquiries</h3>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl animate-pulse">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10" />
                <div className="flex-1">
                  <div className="h-4 w-32 bg-gray-200 dark:bg-white/10 rounded mb-2" />
                  <div className="h-3 w-24 bg-gray-200 dark:bg-white/10 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl">
          <h3 className="text-xl font-bold dark:text-white mb-6">Project Status</h3>
          <div className="flex items-center justify-center py-12">
            <p className="text-gray-500 italic">Project analytics coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
