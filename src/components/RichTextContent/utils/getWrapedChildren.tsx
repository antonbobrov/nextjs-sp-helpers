/* eslint-disable @typescript-eslint/no-use-before-define */
import { Children, ReactElement, ReactNode, createElement } from 'react';

export type TWrapper = {
  targetTagName: keyof HTMLElementTagNameMap;
  wrapperTagName: keyof HTMLElementTagNameMap;
  wrapperClassName: string;
};

interface IProps {
  wrappers: TWrapper[];
}

const wrapChildren = (child: ReactElement, props: IProps): ReactElement => ({
  ...child,
  props: {
    ...child.props,
    children: child.props.children
      ? getWrapedChildren(child.props.children, props)
      : child.props.children,
  },
});

export const getWrapedChildren = (children: ReactNode, props: IProps) =>
  Children.map(children, (child) => {
    if (!child || typeof child !== 'object' || !('type' in child)) {
      return child;
    }

    let result: ReactNode | undefined;

    props.wrappers.forEach(
      ({ targetTagName, wrapperTagName, wrapperClassName }) => {
        if (child.type === targetTagName) {
          result = createElement(
            wrapperTagName,
            { className: wrapperClassName },
            wrapChildren(child, props)
          );
        }
      }
    );

    return result ?? wrapChildren(child, props);
  });
