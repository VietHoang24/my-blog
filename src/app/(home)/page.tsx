import { Intro } from '@/components/ui/home';
import { ProjectsList } from '@/components/ui/projects';

import { FeaturedBlogPosts } from './featured-posts';

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  image: 'https://vietsalt.vercel.app/media/jahir/jahir-hd.jpg',
  url: 'https://vietsalt.vercel.app',
  sameAs: ['https://vietsalt.vercel.app/about'],
  logo: 'https://vietsalt.vercel.app/media/brand/logo-full.png',
  name: 'Viet Salt',
  description:
    'a passionate and creative full-stack software engineer from Vietnam 🇻🇳',
  email: 'hola@jahir.dev',
  foundingDate: new Date('1997-01-28T18:30:00-05:00').toISOString(),
});

export default function HomePage() {
  return (
    <>
      <Intro />
      <FeaturedBlogPosts />
      <ProjectsList title={'Featured projects'} featuredOnly />
      <script type={'application/ld+json'} suppressHydrationWarning>
        {jsonLd}
      </script>
    </>
  );
}
