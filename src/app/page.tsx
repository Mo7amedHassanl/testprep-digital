import { MainLayout } from '@/components/app/main-layout';
import { chapters } from '@/lib/data';

export default function Home() {
  return (
    <main>
      <MainLayout chapters={chapters} />
    </main>
  );
}
