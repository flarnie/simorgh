import React from 'react';
import { render } from '@testing-library/react';

import { ServiceContextProvider } from '#contexts/ServiceContext';
import { ToggleContextProvider } from '#app/contexts/ToggleContext';

import Component, { buildStoryPromos } from '.';

import {
  optimoRelatedContent,
  storyPromoContent,
  relatedContentBlock,
  relatedContentBlockWithTitle,
} from './fixtures';

const renderComponent = ({
  content = relatedContentBlock,
  service = 'afrique',
  variant = 'default',
} = {}) =>
  render(
    <ServiceContextProvider service={service} variant={variant}>
      <ToggleContextProvider
        toggles={{
          eventTracking: { enabled: false },
        }}
      >
        <Component content={content} />
      </ToggleContextProvider>
    </ServiceContextProvider>,
  );

describe('ArticleRelatedContent', () => {
  it('should render related content', () => {
    const { container, getByText } = renderComponent();

    expect(getByText('News homepage')).toBeInTheDocument();
    expect(
      container.querySelector('a[href="https://www.bbc.co.uk/news"]'),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render custom titles', () => {
    const { getByText } = renderComponent({
      content: relatedContentBlockWithTitle,
    });

    expect(getByText('This is my title')).toBeInTheDocument();
  });

  it('should convert optimo related content blocks to the story promo schema', () => {
    expect(buildStoryPromos(optimoRelatedContent)).toEqual(storyPromoContent);
  });
});