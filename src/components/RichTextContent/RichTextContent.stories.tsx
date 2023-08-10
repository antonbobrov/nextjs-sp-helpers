/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RichTextContent } from '.';

type TComponent = typeof RichTextContent;

const meta: Meta<TComponent> = {
  title: 'RichTextContent',
  component: RichTextContent,
  tags: ['autodocs'],
};

export default meta;

export const WithChildren: StoryObj<TComponent> = {
  args: {
    children: (
      <>
        <p>
          <strong>Lorem</strong> ipsum <em>dolor</em> sit{' '}
          <span style={{ textDecoration: 'underline' }}>amet</span>,{' '}
          <span style={{ textDecoration: 'line-through' }}>consectetur</span>{' '}
          <sub>adipiscing</sub> elit. Pharetra <sup>turpis</sup> habitasse amet,
          enim bibendum quis lectus habitant. Ut nisi, dolor adipiscing tellus
          viverra netus. Egestas pulvinar cras pellentesque pulvinar id nec.
          Tristique in malesuada vulputate nulla elementum sit pharetra
          faucibus. Sit libero sem leo arcu elementum sit amet. Elementum proin
          nunc lorem ante vivamus volutpat feugiat viverra egestas.
        </p>
        <p>
          <a href="https://google.com/">Link</a>
        </p>
        <ul>
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>Dolor</li>
        </ul>
        <hr />
        <p> </p>
        <p className="justifyleft">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
          turpis habitasse amet, enim bibendum quis lectus habitant. Ut nisi,
          dolor adipiscing tellus viverra netus. Egestas pulvinar cras
          pellentesque pulvinar id nec. Tristique in malesuada vulputate nulla
          elementum sit pharetra faucibus. Sit libero sem leo arcu elementum sit
          amet. Elementum proin nunc lorem ante vivamus volutpat feugiat viverra
          egestas.
        </p>
        <ol>
          <li>Sit</li>
          <li>Amet</li>
        </ol>
        <p style={{ textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
          turpis habitasse amet, enim bibendum quis lectus habitant. Ut nisi,
          dolor adipiscing tellus viverra netus. Egestas pulvinar cras
          pellentesque pulvinar id nec. Tristique in malesuada vulputate nulla
          elementum sit pharetra faucibus. Sit libero sem leo arcu elementum sit
          amet. Elementum proin nunc lorem ante vivamus volutpat feugiat viverra
          egestas.
        </p>
        <p className="justifyright">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
          turpis habitasse amet, enim bibendum quis lectus habitant. Ut nisi,
          dolor adipiscing tellus viverra netus. Egestas pulvinar cras
          pellentesque pulvinar id nec. Tristique in malesuada vulputate nulla
          elementum sit pharetra faucibus. Sit libero sem leo arcu elementum sit
          amet. Elementum proin nunc lorem ante vivamus volutpat feugiat viverra
          egestas.
        </p>
        <p className="justifyfull">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
          turpis habitasse amet, enim bibendum quis lectus habitant. Ut nisi,
          dolor adipiscing tellus viverra netus. Egestas pulvinar cras
          pellentesque pulvinar id nec. Tristique in malesuada vulputate nulla
          elementum sit pharetra faucibus. Sit libero sem leo arcu elementum sit
          amet. Elementum proin nunc lorem ante vivamus volutpat feugiat viverra
          egestas.
        </p>
        <p className="justifyfull">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
          turpis habitasse amet, enim bibendum quis lectus habitant. Ut nisi,
          dolor adipiscing tellus viverra netus. Egestas pulvinar cras
          pellentesque pulvinar id nec. Tristique in malesuada vulputate nulla
          elementum sit pharetra faucibus. Sit libero sem leo arcu elementum sit
          amet. Elementum proin nunc lorem ante vivamus volutpat feugiat viverra
          egestas.
        </p>
        <p className="justifyleft">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
          turpis habitasse amet, enim bibendum quis lectus habitant. Ut nisi,
          dolor adipiscing tellus viverra netus. Egestas pulvinar cras
          pellentesque pulvinar id nec. Tristique in malesuada vulputate nulla
          elementum sit pharetra faucibus. Sit libero sem leo arcu elementum sit
          amet. Elementum proin nunc lorem ante vivamus volutpat feugiat viverra
          egestas.
        </p>
        <blockquote>
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
          Lorem ipsum dolor sit amet quote Lorem ipsum dolor sit amet quote
        </blockquote>
        <h3>Iframe</h3>
        <p>
          <iframe
            src="https://www.youtube.com/embed/LjCzPp-MK48"
            width="320"
            height="240"
            title="iframe"
          />
        </p>
        <h3>Image With Styles</h3>
        <p>Text</p>
        <p>
          <img
            style={{ float: 'left', marginRight: '10px' }}
            src="https://picsum.photos/150/150"
            alt=""
            width="150"
            height="150"
          />
          Text Lorem ipsum dolor sit amet
        </p>

        <img src="https://picsum.photos/1200" alt="" />
      </>
    ),
  },
};

export const WithHTML: StoryObj<TComponent> = {
  args: {
    html: `
        <p>
          <strong>Lorem</strong> ipsum <em>dolor</em> sit amet
        </p>
        <p>
          <a href="https://google.com/">Link</a>
        </p>
      `,
  },
};

export const WithHTMLAndIframe: StoryObj<TComponent> = {
  args: {
    html: `
        <p>
          <strong>Lorem</strong> ipsum <em>dolor</em> sit amet
        </p>
        <p>
          <a href="https://google.com/">Link</a>
        </p>
        <iframe
          src="https://www.youtube.com/embed/LjCzPp-MK48"
          width="320"
          height="240"
          title="iframe"
        />
      `,
  },
};
