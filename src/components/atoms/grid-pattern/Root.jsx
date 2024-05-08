import { cn } from '@/utils';

const GridPattern = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        'absolute inset-0 -z-40 overflow-hidden border bg-main bg-center [--c:hsl(var(--color)/var(--opacity))] [--color:--border] [--opacity:theme(opacity.80)] [background-image:linear-gradient(var(--c)_.8px,transparent_.8px),linear-gradient(to_right,var(--c)_.8px,transparent_.8px)] [background-size:180px_180px] [border-color:--c] dark:[--opacity:theme(opacity.40)]',
        className,
      )}
      {...props}
    />
  );
};

export default GridPattern;
