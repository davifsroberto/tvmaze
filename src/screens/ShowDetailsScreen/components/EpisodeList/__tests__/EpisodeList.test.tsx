import React from 'react';

import { render, waitFor } from '@testing-library/react-native';

import { EpisodeList } from '../EpisodeList';
import { mocks } from './mocks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { showService } from '../../../../../services/show/showService';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
});
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('EpisodeList', () => {
  it('should showing all season one episodes at first', async () => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValue({
      seasonNames: ['1', '2'],
      seasons: {
        1: [mocks.episode1, mocks.episode2],
        2: [mocks.episode22, mocks.episode23],
      },
    });
    const { getByText, findByText } = render(
      <EpisodeList show={mocks.show} />,
      {
        wrapper,
      }
    );

    const episode1 = await findByText(mocks.episode1.name);
    const episode2 = await getByText(mocks.episode2.name);

    expect(episode1).toBeTruthy();
    expect(episode2).toBeTruthy();
  });
});
