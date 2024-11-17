import { ThemesList } from '@/components/ui/themes';
import { createMetadata } from '@/utils/metadata';

export const metadata = createMetadata({
  title: 'Projects – Viet Salt',
  description:
    // eslint-disable-next-line max-len
    "Projects by Viet Salt. Get to know the projects I'm most proud of. Many of them are open-source.",
  exactUrl: 'https://vietsalt.vercel.app/themes',
  keywords: [
    'tech',
    'software',
    'development',
    'project',
    'portfolio',
    'app',
    'programming',
    'open-source',
  ],
});

export default function ProjectsPage() {
  return <ThemesList title={'Danh sách mẫu thiết kế '} />;
}
