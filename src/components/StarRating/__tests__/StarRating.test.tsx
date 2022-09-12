import React from 'react';

import { render } from '@testing-library/react-native';

import { StarRating } from '../StarRating';

describe('StarRating', () => {
  describe('should be if rating was passed', () => {
    const starRating = <StarRating rating={{ average: 7 }} />;

    it('show the average', () => {
      const { getByText } = render(starRating);

      expect(getByText('7')).toBeTruthy();
    });

    it('show star icon', () => {
      const { getByTestId } = render(starRating);

      expect(getByTestId('starIcon')).toBeTruthy();
    });
  });

  describe('rating was NOT passed', () => {
    it('should return nothing', () => {
      const { container } = render(<StarRating />);

      expect(container.children.length).toEqual(0);
    });
  });
});
