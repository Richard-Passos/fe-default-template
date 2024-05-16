import { cnv } from '@/utils';

const timerbarSizes = {
  xs: 'h-0.5',
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-4'
};

/* 'relative' and 'z-0' are to fix overflow clipping in Safari. See more here: https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
const timerbar = cnv({
  base: 'relative z-0 w-full overflow-hidden rounded-full bg-main/20',
  variants: {
    size: timerbarSizes
  },
  defaultVariants: {
    color: 'primary',
    size: 'md'
  }
});

export default timerbar;
export { timerbar, timerbarSizes };
