import { useForwardedRef } from '@anton.bobrov/react-hooks';
import React, { forwardRef } from 'react';
import NextLink from 'next/link';

/** Base link component */
export const Link = forwardRef<
  HTMLAnchorElement,
  Parameters<typeof NextLink>[0]
>(
  (
    { className, style, href, target, rel, children, ...props },
    forwardedRef
  ) => {
    const ref = useForwardedRef(forwardedRef);

    const defaultRel = target === '_blank' ? 'noopener noreferrer' : undefined;

    return (
      <NextLink
        ref={ref}
        className={className}
        style={style}
        href={href}
        target={target}
        rel={rel ?? defaultRel}
        data-framework-link="true"
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = 'Link';
