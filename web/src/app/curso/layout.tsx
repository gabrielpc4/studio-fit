'use client';

import { Sidebar } from '@/components/ui/Sidebar';

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-72">
        {children}
      </main>
    </div>
  );
}
