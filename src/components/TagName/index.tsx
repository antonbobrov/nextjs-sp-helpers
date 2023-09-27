import { createElement, forwardRef, useImperativeHandle, useRef } from 'react';
import { ITagNameProps } from './types';

export const TagName = forwardRef<HTMLElement, ITagNameProps>(
  ({ tagName, ...props }, forwardedRef) => {
    const ref = useRef<HTMLElement | null>(null);
    useImperativeHandle(forwardedRef, () => ref.current!);

    return createElement(tagName, {
      ...props,
      ref,
    });
  }
);

TagName.displayName = 'TagName';
