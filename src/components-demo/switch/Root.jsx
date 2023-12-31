import { Label, Switch } from '@/components/ui';
import { cn } from '@/utils';

const SwitchDemo = ({ className, ...props }) => {
  return (
    <div
      className={cn('flex items-center gap-2', className)}
      {...props}
    >
      <Label htmlFor='airplane-mode'>Airplane mode</Label>

      <Switch id='airplane-mode'>
        <Switch.Thumb />
      </Switch>
    </div>
  );
};

export default SwitchDemo;
