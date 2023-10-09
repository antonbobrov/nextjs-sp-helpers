import { ReactNode, useMemo } from 'react';
import parse from 'html-react-parser';
import { prefixedClasNames } from '@utils/prefixedClassNames';
import { TWrapper, getWrapedChildren } from './getWrapedChildren';

type TProps = { html: string } | { children: ReactNode };

const wrappers: TWrapper[] = [
  {
    targetTagName: 'video',
    wrapperTagName: 'span',
    wrapperClassName: prefixedClasNames('rich-text-content__video'),
  },
  {
    targetTagName: 'iframe',
    wrapperTagName: 'span',
    wrapperClassName: prefixedClasNames('rich-text-content__iframe'),
  },
  {
    targetTagName: 'table',
    wrapperTagName: 'div',
    wrapperClassName: prefixedClasNames('rich-text-content__table'),
  },
];

export function useRichTextWrappedChildren(props: TProps) {
  const result = useMemo(() => {
    if ('children' in props) {
      const children = getWrapedChildren(props.children, { wrappers });

      return { children };
    }

    if ('html' in props) {
      const hasTargetElements = !!wrappers.find(({ targetTagName }) =>
        props.html.includes(`<${targetTagName}`)
      );

      if (hasTargetElements) {
        const children = getWrapedChildren(parse(props.html), { wrappers });

        return { children };
      }

      return { dangerouslySetInnerHTML: { __html: props.html } };
    }

    return {};
  }, [props]);

  return result;
}
