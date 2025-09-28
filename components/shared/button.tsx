import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/utils/utils';
import { ComponentPropsWithoutRef, ElementType } from 'react';

type ButtonProps<T extends ElementType = 'button'> = {
  asChild?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<T>;

function Button<T extends ElementType = 'button'>({
  asChild,
  className,
  ...props
}: ButtonProps<T>) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(
        'cursor-pointer bg-emerald-900 text-white p-2 px-4 rounded-sm hover:bg-emerald-800',
        className,
      )}
      {...props}
    />
  );
}

export default Button;
