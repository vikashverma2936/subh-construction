'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, Users, FolderKanban, LogOut, Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/admin' },
  { icon: Users, label: 'Leads', href: '/admin/leads' },
  { icon: FolderKanban, label: 'Projects', href: '/admin/projects' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if not authenticated (except login page)
  if (status === 'unauthenticated' && pathname !== '/admin/login') {
    router.push('/admin/login');
    return null;
  }

  // Don't show layout on login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-brand-black">
        <div className="animate-pulse flex flex-col items-center">
            <div className="w-12 h-12 bg-brand-yellow/20 rounded-full mb-4"></div>
            <div className="h-4 w-24 bg-gray-200 dark:bg-white/10 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-brand-black flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 bg-white dark:bg-white/5 border-r border-gray-200 dark:border-white/10 z-50 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="h-full flex flex-col p-4">
          <div className="flex items-center justify-between mb-8 px-2">
            <span className={`font-bold text-lg dark:text-white truncate ${sidebarOpen ? 'block' : 'hidden'}`}>SUBH Admin</span>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg text-gray-500"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-all ${active ? 'bg-brand-yellow text-brand-black font-bold' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'}`}
                >
                  <item.icon size={20} />
                  <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>{item.label}</span>
                  {active && sidebarOpen && <ChevronRight size={16} className="ml-auto" />}
                </Link>
              );
            })}
          </nav>

          <button 
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="mt-auto flex items-center gap-4 p-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"
          >
            <LogOut size={20} />
            <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <header className="h-16 border-b border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {menuItems.find(m => m.href === pathname)?.label || 'Admin Panel'}
          </h2>
          <div className="ml-auto flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold dark:text-white">{session?.user?.name}</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-brand-black font-bold">
              A
            </div>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
