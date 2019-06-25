import React, { useContext } from 'react';
import { bool, shape, number } from 'prop-types';
import SectionLabel from '@bbc/psammead-section-label';
import { StoryPromoUl, StoryPromoLi } from '@bbc/psammead-story-promo-list';
import { ServiceContext } from '../../contexts/ServiceContext';
import StoryPromo from '../StoryPromo';
import groupShape from '../../models/propTypes/frontPageGroup';
import { storyItem } from '../../models/propTypes/storyItem';
import idSanitiser from '../../lib/utilities/idSanitiser';
import deepGet from '../../lib/utilities/deepGet';

const StoryPromoLiContainer = ({ item, sectionNumber, storyNumber }) => {
  const topStory = sectionNumber === 0 && storyNumber === 0;
  const lazyLoadImage = !topStory; // don't lazy load image if it is a top story

  return (
    <StoryPromoLi key={item.id}>
      <StoryPromo
        item={item}
        topStory={topStory}
        lazyLoadImage={lazyLoadImage}
      />
    </StoryPromoLi>
  );
};

StoryPromoLiContainer.propTypes = {
  item: shape(storyItem).isRequired,
  sectionNumber: number.isRequired,
  storyNumber: number.isRequired,
};

const FrontPageSection = ({ bar, group, sectionNumber }) => {
  const { script } = useContext(ServiceContext);
  const sectionLabelId = idSanitiser(group.title);

  const strapline = deepGet(['strapline', 'name'], group);
  const items = deepGet(['items'], group);

  // The current implementation of SectionLabel *requires* a strapline to be
  // present in order to render. It is currently *not possible* to render a
  // section that does not have a strapline without breaking both the visual
  // *and especially* the screen reader UX.
  // If this group does not have a strapline; do not render!
  // This may change in the future, if a way to avoid breaking UX is found.
  // Also, don't render a section without any items.
  if (!(strapline && items) || items.length === 0) {
    return null;
  }

  const isFirstSection = sectionNumber !== 0;

  return (
    // jsx-a11y considers `role="region"` on a <section> to be redundant.
    // (<section> tags *should* imply `role="region"`)
    // While this may be true in a perfect world, we set it in order to get
    // the greatest possible support.
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <section role="region" aria-labelledby={sectionLabelId}>
      <SectionLabel script={script} labelId={sectionLabelId} bar={bar}>
        {group.strapline.name}
      </SectionLabel>
      {items.length > 1 ? (
        <StoryPromoUl>
          {items.map((item, index) => (
            <StoryPromoLiContainer
              item={item}
              sectionNumber={sectionNumber}
              storyNumber={index}
            />
          ))}
        </StoryPromoUl>
      ) : (
        <StoryPromo
          item={items[0]}
          script={script}
          topStory={isFirstSection}
          lazyLoadImage={isFirstSection}
        />
      )}
    </section>
  );
};

FrontPageSection.defaultProps = {
  bar: true,
};

FrontPageSection.propTypes = {
  bar: bool,
  group: shape(groupShape).isRequired,
  sectionNumber: number.isRequired,
};

export default FrontPageSection;
