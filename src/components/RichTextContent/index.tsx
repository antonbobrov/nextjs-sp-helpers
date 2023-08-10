import cn from 'classnames';
import React, { forwardRef } from 'react';
import { useForwardedRef } from '@anton.bobrov/react-hooks';
import { prefixedClasNames } from '@utils/prefixedClassNames';
import { TRichTextContentProps } from './types';
import { useRichTextWrappedMedia } from './utils';

export const RichTextContent = forwardRef<
  HTMLDivElement,
  TRichTextContentProps
>(({ className, isOverflowTextHidden = true, ...props }, forwardedRef) => {
  const ref = useForwardedRef(forwardedRef);

  const classNames = cn(
    className,
    prefixedClasNames(
      'rich-text-content',
      isOverflowTextHidden && 'is-overflow-text-hidden'
    )
  );

  const textProps = useRichTextWrappedMedia(props);

  return (
    <div
      ref={ref}
      {...props}
      {...textProps}
      className={classNames}
      // @ts-ignore
      html={undefined}
    />
  );
});

RichTextContent.displayName = 'RichTextContent';
