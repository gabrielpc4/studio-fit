'use client';

import { useState, useCallback } from 'react';
import { Sidebar, MobileMenuButton } from '@/components/ui/Sidebar';

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header mobile com botão do menu */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b border-slate-200 z-30 flex items-center px-4">
        <MobileMenuButton onClick={() => setSidebarOpen(true)} />
        <span className="ml-3 font-semibold text-slate-800">React Native</span>
      </header>

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* Main content - com margem para sidebar em desktop, margem top para header em mobile */}
      <main className="lg:ml-72 pt-14 lg:pt-0">
        {children}
      </main>
    </div>
  );
}
