'use client';

import { Item } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AccordionItem = ({ className, ...props }, ref) => {
  return (
    <Item
      className={cn(
        'relative top-px -mt-px overflow-hidden has-[[data-accordion-trigger]:focus-visible]:z-10 has-[[data-accordion-trigger]:focus-visible]:outline [&:not(:first-child)]:rounded-t-none [&:not(:last-child)]:rounded-b-none',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AccordionItem);
