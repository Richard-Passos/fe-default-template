'use client';

import { ItemIndicator } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const DropdownMenuItemIndicator = ({ className, ...props }, ref) => {
  return (
    <ItemIndicator
      className={cn('absolute left-[.5625rem] size-3.5', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuItemIndicator);
