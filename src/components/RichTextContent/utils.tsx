/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEvent } from '@anton.bobrov/react-hooks';
import React, { Children, ReactElement, ReactNode, useMemo } from 'react';
import parse from 'html-react-parser';
import { prefixedClasNames } from '@utils/prefixedClassNames';

type TProps = { html: string } | { children: ReactNode };

export function useRichTextWrappedMedia(props: TProps) {
  const wrapChildren = useEvent(
    (child: ReactElement): ReactElement => ({
      ...child,
      props: {
        ...child.props,
        children: child.props.children
          ? getWithWrapedMedia(child.props.children)
          : child.props.children,
      },
    })
  );

  const getWithWrapedMedia = useEvent((children: ReactNode) =>
    Children.map(children, (child) => {
      if (!child || typeof child !== 'object' || !('type' in child)) {
        return child;
      }

      if (['iframe', 'video'].includes(child.type as any)) {
        return (
          <span className={prefixedClasNames('rich-text-content__media')}>
            {wrapChildren(child)}
          </span>
        );
      }

      return wrapChildren(child);
    })
  );

  const result = useMemo(() => {
    if ('children' in props) {
      const children = getWithWrapedMedia(props.children);

      return { children };
    }

    if ('html' in props) {
      if (props.html.includes('<iframe') || props.html.includes('<video')) {
        const children = getWithWrapedMedia(parse(props.html));

        return { children };
      }

      return { dangerouslySetInnerHTML: { __html: props.html } };
    }

    return {};
  }, [getWithWrapedMedia, props]);

  return result;
}
