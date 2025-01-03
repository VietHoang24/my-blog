import { Link } from '@/components/atoms/link';
import { Section } from '@/components/atoms/section';
import { SocialLinks } from '@/components/molecules/social-links';
import { Activity } from '@/components/ui/about/activity';
import { Experience } from '@/components/ui/about/experience';
import { Skills } from '@/components/ui/about/skills';
import { getColoredTextClasses } from '@/utils/colored-text';
import { createMetadata } from '@/utils/metadata';

import Photo from './photo';

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateCreated: new Date('1997-01-28T18:30:00-05:00').toISOString(),
  dateModified: new Date().toISOString(),
  mainEntity: {
    '@id': '#main-author',
    '@type': 'Person',
    name: 'Viet Salt',
    alternateName: ['jahirfiquitiva', 'jahirdotdev'],
    description:
      'Passionate and creative full-stack software engineer from Vietnam 🇻🇳',
    image: 'https://vietsalt.vercel.app/media/jahir/jahir-hd.jpg',
    sameAs: [
      'https://github.com/VietHoang24',
      'https://www.linkedin.com/in/vi%E1%BB%87t-ho%C3%A0ng-qu%E1%BB%91c-10a21a1b8/',
      'https://x.com/home',
      'https://www.instagram.com/hv_water',
    ],
  },
});

export default function AboutPage() {
  return (
    <>
      <Section id={'about'}>
        <h1 className={getColoredTextClasses('green')}>About</h1>
        <p className={'max-w-nice'}>
          <span role={'img'} aria-label={'waving hand'}>
            👋
          </span>{' '}
          Hey there! I&apos;m Viet Salt, a full-stack software engineer
          from{' '}
          <Link
            title={'Vietnam'}
            href={'https://www.google.com/maps/place/Vietnam/@4,-72z/'}
            data-umami-event={'Link to Vietnam map'}
          >
            Vietnam{' '}
            <span role={'img'} aria-label={'Vietnam flag'}>
              🇻🇳
            </span>
          </Link>{' '}
          with over four (4) years of professional experience. My pronouns are
          he/they.
        </p>
        <p className={'max-w-nice'}>
          I focus on details and I&apos;m passionate about crafting software
          products that look great and are both accessible and easy to maintain.
        </p>
        <Photo />
        <p className={'max-w-nice'}>
          I&apos;m a huge advocate for open source and collaborating with the
          community. You can find my stash of websites, libraries, and apps on{' '}
          <Link title={'GitHub'} href={'https://github.com/VietHoang24/'}>
            GitHub
          </Link>{' '}
        </p>
        <p className={'max-w-nice'}>
          I&apos;m all about diving into challenges improving and expanding my
          skillset and I thrive in globally-remote teams that value people and
          embrace trust, kindness, and inclusion.
        </p>
        <p className={'max-w-nice'}>
          If you&apos;re curious about the hardware and software tools I use
          every day, feel free to check out the{' '}
          <Link title={'Uses page'} href={'/uses'}>
            uses
          </Link>{' '}
          page.
        </p>
      </Section>
      <Section id={'contact'} className={'-mt-5 gap-2.5'}>
        <h2 className={'mb-1'} style={{ fontSize: '1rem' }}>
          Let&apos;s connect!
        </h2>
        <p>
          Feel free to reach out to me at{' '}
          <Link title={'Email'} href={'mailto:vietprock@gmail.com'}>
            vietprock@gmail.com
          </Link>
          , or find me on social media:
        </p>
        <SocialLinks />
      </Section>
      <Skills />
      <Experience />
      <Activity />
      <script type={'application/ld+json'} suppressHydrationWarning>
        {jsonLd}
      </script>
    </>
  );
}

export const metadata = createMetadata({
  title: 'About – Viet Salt',
  description: 'Learn more about me (Viet Salt), my career and more',
  exactUrl: 'https://vietsalt.vercel.app/about',
  keywords: ['bio', 'biography', 'information', 'about', 'career'],
});
