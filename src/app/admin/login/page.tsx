'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, User, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await signIn('credentials', {
        username,
        password,
        redirect: false,
      });

      if (res?.error) {
        toast.error('Invalid credentials. Please try again.');
      } else {
        toast.success('Logged in successfully!');
        router.push('/admin');
        router.refresh();
      }
    } catch {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-brand-black px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full p-8 bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-yellow/10 text-brand-yellow mb-4">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Portal</h1>
          <p className="text-gray-500 dark:text-gray-400">Unlock your construction management dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Username</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-100 dark:bg-white/5 border border-transparent focus:border-brand-yellow/50 rounded-xl outline-none transition-all dark:text-white"
                placeholder="admin"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-100 dark:bg-white/5 border border-transparent focus:border-brand-yellow/50 rounded-xl outline-none transition-all dark:text-white"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black font-bold rounded-xl transition-all flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : 'Login to Dashboard'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
