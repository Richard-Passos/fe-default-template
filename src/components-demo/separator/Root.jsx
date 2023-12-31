import { Link, Separator, Text } from '@/components/ui';

const SeparatorDemo = (props) => {
  return (
    <section {...props}>
      <header className='space-y-1'>
        <Text.Subtitle className='text-sm leading-none'>
          Radix Primitives
        </Text.Subtitle>

        <Text className='text-sm text-muted-content'>
          An open-source UI component library.
        </Text>
      </header>

      <Separator className='my-4' />

      <nav className='flex h-5 items-center gap-4 text-sm'>
        <Link href='#'>Blog</Link>

        <Separator orientation='vertical' />

        <Link href='#'>Docs</Link>

        <Separator orientation='vertical' />

        <Link href='#'>Source</Link>
      </nav>
    </section>
  );
};

export default SeparatorDemo;
