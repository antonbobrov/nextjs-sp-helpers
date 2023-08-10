import { HTMLAttributes, ReactNode } from 'react';

interface IBaseProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    'children' | 'dangerouslySetInnerHTML'
  > {
  /**
   * Hide the overflow text
   * @default true
   */
  isOverflowTextHidden?: boolean;
}

export type TRichTextContentProps =
  | (IBaseProps & { children: ReactNode })
  | (IBaseProps & { html: string });
