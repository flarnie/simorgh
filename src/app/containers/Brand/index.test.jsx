import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { news as brandSVG } from '@bbc/psammead-assets/svgs';
import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import BrandContainer from '.';
import { ServiceContext } from '#contexts/ServiceContext';
import { UserContext } from '#contexts/UserContext';
import { RequestContext } from '#contexts/RequestContext';
import * as cookies from '#contexts/UserContext/cookies';

const newsServiceContextStub = {
  product: 'BBC News',
  service: 'news',
  brandSVG,
  svgHeight: 24,
  maxWidth: 280,
  minWidth: 180,
  theming: {
    brandBackgroundColour: `${C_POSTBOX}`,
    brandLogoColour: `${C_WHITE}`,
  },
};

const variantServiceContextStub = {
  ...newsServiceContextStub,
  script: latin,
  scriptLink: {
    text: 'Test',
    offscreenText: 'Test-variant',
  },
};

jest.mock('#lib/utilities/variantHandler');
const variantHandlers = require('#lib/utilities/variantHandler');

variantHandlers.getOtherVariant.mockImplementation(() => 'test');

const setPreferredVariantCookieSpy = jest.spyOn(
  cookies,
  'setPreferredVariantCookie',
);
const userContextMock = {
  setPreferredVariantCookie: cookies.setPreferredVariantCookie,
};

const BrandContainerWithContext = (context, skipLink) => (
  <ServiceContext.Provider value={context}>
    <UserContext.Provider value={userContextMock}>
      <RequestContext.Provider value={{ variant: 'test' }}>
        <BrandContainer skipLink={skipLink} />
      </RequestContext.Provider>
    </UserContext.Provider>
  </ServiceContext.Provider>
);

describe(`BrandContainer`, () => {
  shouldMatchSnapshot(
    'should render correctly',
    BrandContainerWithContext(newsServiceContextStub),
  );

  shouldMatchSnapshot(
    'should render script link correctly',
    BrandContainerWithContext(variantServiceContextStub),
  );

  describe('Assertions', () => {
    it('should render skip to content link if provided', () => {
      const mockSkipLink = <div data-testid="skip-link">Skip Link</div>;
      const { getByTestId } = render(
        BrandContainerWithContext(newsServiceContextStub, mockSkipLink),
      );

      const skipLink = getByTestId('skip-link');
      expect(skipLink).not.toBeNull();
    });

    describe('Script Link and Preferred Variant Cookie', () => {
      let scriptLink;

      beforeEach(() => {
        const { container } = render(
          BrandContainerWithContext(variantServiceContextStub),
        );
        scriptLink = container.querySelector('a[data-variant="test"]');
      });

      afterEach(() => {
        document.cookie = '';
        jest.clearAllMocks();
      });

      it('Script Link should contain link to other variant', () => {
        expect(scriptLink.getAttribute('href')).toBe('/news/test');
      });

      it('should set preferred variant cookie when ScriptLink is clicked and cookie is not defined', () => {
        document.cookie = '';

        fireEvent.click(scriptLink);

        expect(setPreferredVariantCookieSpy).toHaveBeenCalledTimes(1);
        expect(document.cookie).toEqual('; ckps_news=test');
      });

      it('should update preferred variant cookie when ScriptLink is clicked and cookie exists', () => {
        document.cookie = 'ckps_news=lat';

        fireEvent.click(scriptLink);

        expect(setPreferredVariantCookieSpy).toHaveBeenCalledTimes(1);
        expect(document.cookie).toEqual('; ckps_news=test');
      });
    });
  });
});
