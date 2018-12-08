import React from 'react';
import { shallow } from 'enzyme';

import SavedDog from './saved-dog';

describe('<SavedDog />', () => {
  it('Renders without crashing', () => {
    shallow(<SavedDog />);
  });
});
