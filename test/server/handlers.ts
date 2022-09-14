import { rest } from 'msw';

import { showMocks } from 'test/mocks/showMocks';
import { BASE_URL } from 'src/services/api';

export const handlers = [
  rest.get(`${BASE_URL}shows/:showId/episodes`, (req, resp, ctx) => {
    return resp(ctx.status(200), ctx.json(showMocks.episodeList));
  }),
];
