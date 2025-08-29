
"use client";

import { MainLayout } from '@/components/app/main-layout';
import { getChapters, seedInitialData } from '@/lib/firestore';
import type { Chapter } from '@/lib/types';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        // Both seeding and fetching are now explicitly client-side.
        await seedInitialData(); 
        const chapterData = await getChapters();
        setChapters(chapterData);
      } catch (error) {
        console.error("Error loading chapters:", error);
        // Handle error state in UI if necessary
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <main>
      <MainLayout chapters={chapters} />
    </main>
  );
}
