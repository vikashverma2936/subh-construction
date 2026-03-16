'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, Trash2, Search, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  createdAt: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/contact/leads');
      const data = await res.json();
      setLeads(data);
    } catch {
      toast.error('Failed to fetch leads');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const deleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;

    try {
      const res = await fetch('/api/contact/leads', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        toast.success('Lead deleted');
        setLeads(leads.filter(l => l._id !== id));
      }
    } catch {
      toast.error('Failed to delete lead');
    }
  };

  const filteredLeads = leads.filter(l => 
    l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold dark:text-white">Customer Inquiries</h3>
          <p className="text-sm text-gray-500">Manage your business leads from the contact form</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search leads..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl outline-none focus:border-brand-yellow/50 w-full sm:w-64 dark:text-white transition-all"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Lead Info</th>
                <th className="px-6 py-4">Req. Type</th>
                <th className="px-6 py-4">Message</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-white/10">
              {loading ? (
                [1, 2, 3].map(i => (
                  <tr key={i} className="animate-pulse">
                    <td className="px-6 py-4"><div className="h-4 w-32 bg-gray-200 dark:bg-white/10 rounded" /></td>
                    <td className="px-6 py-4"><div className="h-4 w-24 bg-gray-200 dark:bg-white/10 rounded" /></td>
                    <td className="px-6 py-4"><div className="h-4 w-48 bg-gray-200 dark:bg-white/10 rounded" /></td>
                    <td className="px-6 py-4"><div className="h-4 w-20 bg-gray-200 dark:bg-white/10 rounded" /></td>
                    <td className="px-6 py-4"></td>
                  </tr>
                ))
              ) : filteredLeads.map((lead) => (
                <motion.tr 
                  key={lead._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900 dark:text-white">{lead.name}</span>
                      <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                        <span className="flex items-center gap-1"><Mail size={12} /> {lead.email}</span>
                        <span className="flex items-center gap-1"><Phone size={12} /> {lead.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-brand-yellow/10 text-brand-yellow text-xs font-bold rounded-full border border-brand-yellow/20">
                      {lead.projectType}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate" title={lead.message}>
                      {lead.message}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-gray-500 whitespace-nowrap">
                      {new Date(lead.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href={`mailto:${lead.email}`} className="p-2 text-blue-500 hover:bg-blue-500/10 rounded-lg">
                        <ExternalLink size={18} />
                      </a>
                      <button 
                        onClick={() => deleteLead(lead._id)}
                        className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        {!loading && filteredLeads.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-gray-500">No leads found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
