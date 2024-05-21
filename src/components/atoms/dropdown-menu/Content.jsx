'use client';

import { Content } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

const DropdownMenuContent = ({ className, ...props }, ref) => {
  return (
    <Content
      className={cn(
        '[--dropdown-menu-content-available-h:--radix-dropdown-menu-content-available-height] [--dropdown-menu-content-available-w:--radix-dropdown-menu-content-available-width] [--dropdown-menu-content-transform-origin:--radix-dropdown-menu-content-transform-origin] [--dropdown-menu-trigger-h:--radix-dropdown-menu-trigger-height] [--dropdown-menu-trigger-w:--radix-dropdown-menu-trigger-width]',
        className
      )}
      ref={ref}
      sideOffset={8}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuContent);
