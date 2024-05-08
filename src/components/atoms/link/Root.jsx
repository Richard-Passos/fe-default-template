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
        'inline-flex cursor-pointer items-center justify-center text-center font-semibold underline decoration-transparent underline-offset-0 transition-[color,background-color,border-color,text-decoration-color,text-underline-offset] hover:decoration-current hover:underline-offset-4',
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
