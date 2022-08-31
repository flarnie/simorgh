import React from 'react';

import Image from '.';

const Component = () => {
  return (
    <Image
      alt="orange 1"
      originCode="cpsdevpb"
      src="41BC/test/_63482861_orange1.jpg"
      originalImageWidth={500}
      imageResolutions={[200, 500, 1000]}
      sizes="(max-width: 600px) 480px, 800px"
    />
  );
};

export default {
  title: 'New Components/Image',
  Component,
  parameters: { chromatic: { disable: true } },
};

export const Example = Component;
