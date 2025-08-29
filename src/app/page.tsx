import { MainLayout } from '@/components/app/main-layout';
import { getChapters } from '@/lib/firestore';

export default async function Home() {
  const chapters = await getChapters();
  return (
    <main>
      <MainLayout chapters={chapters} />
    </main>
  );
}
