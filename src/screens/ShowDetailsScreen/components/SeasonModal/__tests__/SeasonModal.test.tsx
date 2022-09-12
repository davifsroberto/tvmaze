import React, { createRef } from 'react';
import { Modalize } from 'react-native-modalize';

import { act, fireEvent, render } from '@testing-library/react-native';

import { SeasonModal } from '../SeasonModal';

describe('SeasonModal', () => {
  it('should render all season options', () => {
    const modalizeRef = createRef<Modalize>();

    const { getAllByText } = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={(season) => console.log(season)}
        selectedSeason="1"
        seasons={['1', '2', '3']}
      />
    );

    act(() => {
      modalizeRef.current?.open();
    });

    expect(getAllByText(/season/i).length).toBe(3);
  });

  it('shouldSelectSeason wuth corret season when season option was pressed', () => {
    const modalizeRef = createRef<Modalize>();

    const onSelectSeasonMock = jest.fn();

    const { getByText } = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={onSelectSeasonMock}
        selectedSeason="1"
        seasons={['1', '2', '3']}
      />
    );

    act(() => {
      modalizeRef.current?.open();
    });

    const season2Element = getByText(/season 2/i);

    fireEvent.press(season2Element);

    expect(onSelectSeasonMock).toBeCalledWith('2');
  });
});
