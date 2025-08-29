
"use client";

import { MainLayout } from '@/components/app/main-layout';
import { chapters as initialChapters } from '@/lib/data';
import type { Chapter } from '@/lib/types';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { getChapters } from '@/lib/firestore';

export default function Home() {
  const [chapters, setChapters] = useState<Chapter[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const chapterData = await getChapters();
        // If firestore returns data, use it. Otherwise, stick with initial data.
        if (chapterData && chapterData.length > 0) {
            setChapters(chapterData);
        } else {
            // Fallback to local data if firestore is empty or fails
            setChapters(initialChapters);
        }
      } catch (error) {
        console.error("Error loading chapters from Firestore, using local data:", error);
        setChapters(initialChapters);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading || !chapters) {
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
