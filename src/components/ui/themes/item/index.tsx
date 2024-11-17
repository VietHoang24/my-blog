import { type CSSProperties } from 'react';

import type { Project } from '@/content';
import { hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';

import { ProjectIcon, ProjectLink } from './item.styles';
import { StarsCounter } from './stars-count';
import PjIcon from './project-icon';

interface ThemeItemProps {
  project: Project;
}

export const ThemeItem = ({ project }: ThemeItemProps) => {
  const color =
    hexToRgb(project.darkColor || project.color, 1, true) ||
    'var(--color-accent-dark)';
  return (
    <ProjectLink
      title={project.name}
      href={project.url}
      style={{ '--tint': color } as CSSProperties}
      data-umami-event={'View project'}
      data-umami-event-project={project.name}
      className="flex align-middle"
    >

<PjIcon className="mt-[5px]" name={project.icon}/>

      {/* <ProjectIcon
        src={`/media/projects/${project.icon || ''}`}
        alt={`Icon for project "${project.name}"`}
        width={56}
        height={56}
        blurDataURL={project.iconMeta?.blurDataURL}
        placeholder={project.iconMeta?.placeholder}
      /> */}
      <div className={'flex flex-col gap-0.5'}>
        <div className={'flex flex-row gap-3 items-center'}>
          <p
            className={cx(
              'font-medium capitalize',
              'text-xs text-primary-txt line-clamp-2 text-pretty',
              'group-hocus/project:underline group-hocus/project:decoration-primary-txt',
            )}
          >
            {project.name}
          </p>
          <StarsCounter repo={project.repo || ''} owner={project.owner} />
        </div>
        <p className={'text-2xs text-secondary-txt line-clamp-2 text-pretty'}>
          {project.description}
        </p>
      </div>
    </ProjectLink>
  );
};
