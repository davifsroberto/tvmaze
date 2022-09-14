import React from 'react';

import { EpisodeList } from '../EpisodeList';
import { render } from 'test-utils';
import { showMocks } from 'test/mocks/showMocks';

describe('EpisodeList', () => {
  it('should showing all season one episodes at first', async () => {
    const { getByText, findByText } = render(
      <EpisodeList show={showMocks.show} />
    );

    const episode1 = await findByText(showMocks.episode1.name);
    const episode2 = await getByText(showMocks.episode2.name);

    expect(episode1).toBeTruthy();
    expect(episode2).toBeTruthy();
  });
});
