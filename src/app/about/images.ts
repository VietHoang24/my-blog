import { unstable_cache as cache } from 'next/cache';

const imagesAlts: Array<string> = [
  "At Festival Estéreo Picnic – Mar '23",
  "At The Angel of Independence in Mexico City – Oct '23",
  "At Savvycom running program",
  "In Medellin, Vietnam – Nov '23",
];

export const getAboutImage = cache(
  async () => {
    const index = 2;
    const src = await import(`../../assets/images/about/${index}.jpeg`);
    console.log('src :>> ', src);
    return {
      src: JSON.parse(JSON.stringify(src)),
      alt: imagesAlts[index],
    };
  },
  ['about-image'],
  { revalidate: 86400 },
);
