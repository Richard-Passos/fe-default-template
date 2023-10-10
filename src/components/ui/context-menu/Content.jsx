'use client';

import { Content } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ContextMenuContent = ({ className, ...props }, ref) => {
  return (
    <Content
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-sm border bg-muted p-1 text-muted-content shadow-md animate-in fade-in-80 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuContent);