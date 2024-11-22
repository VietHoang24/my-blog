import { Icon } from '@/components/atoms/icon';
import { LinkButton } from '@/components/atoms/link-button';
import { Section } from '@/components/atoms/section';
import { themes as allProjects } from '@/content';
import { getColoredTextClasses } from '@/utils/colored-text';
import cx from '@/utils/cx';
import ThemeListItems from './item/themeListItem';


interface ProjectsListProps {
  title: string;
  featuredOnly?: boolean;
}

const projects = allProjects.sort((a, b) => a.order - b.order);
export const ThemesList = (props: ProjectsListProps) => {
  const filteredProjects = props.featuredOnly
    ? projects.filter((it) => !it.hide)
    : projects;
  const Heading = props.featuredOnly ? 'h2' : 'h1';
  return (
    <Section id={'projects'} className={'gap-6'}>
      <div
        className={cx(
          'w-full flex flex-col items-start gap-4',
          'mobile-md:flex-row mobile-md:items-center mobile-md:justify-between',
        )}
      >
        <Heading className={getColoredTextClasses('purple')}>
          {props.title}
        </Heading>
        {props.featuredOnly ? (
          <LinkButton
            title={'View all'}
            href={'/projects'}
            className={cx(
              'pr-3.5',
              'justify-center max-mobile-md:flex-1',
              'mobile-md:self-start mobile-md:justify-start',
            )}
            data-umami-event={'View all projects'}
          >
            <Icon
              className={'size-5'}
              path={
                'M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z'
              }
            />
            <span>View all</span>
          </LinkButton>
        ) : null}
      </div>
      <ThemeListItems themes={filteredProjects} />
    </Section>
  );
};
