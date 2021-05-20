import React from 'react';
import path from 'ramda/src/path';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import pidginPageData from '#data/pidgin/cpsAssets/tori-49450859';
import RecommendationsPromoList from './index';
import { ServiceContextProvider } from '#contexts/ServiceContext';
import { ToggleContextProvider } from '#contexts/ToggleContext';

const promoItems = path(
  ['relatedContent', 'groups', 0, 'promos'],
  pidginPageData,
);

describe('RecommendationsPromoList', () => {
  shouldMatchSnapshot(
    'it renders a list of Story Promos wrapped in Grid components',
    <ServiceContextProvider service="pidgin">
      <ToggleContextProvider
        toggles={{
          eventTracking: { enabled: true },
        }}
      >
        <RecommendationsPromoList promoItems={promoItems} dir="ltr" />,
      </ToggleContextProvider>
    </ServiceContextProvider>,
  );
});
