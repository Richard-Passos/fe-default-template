'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { Link as NavLink } from '@/navigation';
import { cn, isExternalUrl } from '@/utils';

const Link = ({ asChild, href, className, ...props }, ref) => {
  const Tag = asChild ? Slot : NavLink,
    isExternal = isExternalUrl(href);

  const externalLinkProps = { rel: 'noreferrer', target: '_blank' };

  return (
    <Tag
      className={cn(
        'relative cursor-pointer font-medium no-underline before:absolute before:inset-x-0 before:-bottom-0.5 before:h-px before:scale-x-0 before:bg-current before:transition-transform hover:before:scale-x-100',
        className
      )}
      href={href ?? ''}
      ref={ref}
      {...(isExternal && externalLinkProps)}
      {...props}
    />
  );
};

export default forwardRef(Link);
