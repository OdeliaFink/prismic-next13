import * as React from 'react';

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = 'section',
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp>
      <div></div>
    </Comp>
  );
}
