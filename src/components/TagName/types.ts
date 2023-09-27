import { AllHTMLAttributes } from 'react';

export interface ITagNameProps extends AllHTMLAttributes<any> {
  tagName: keyof HTMLElementTagNameMap;
}
