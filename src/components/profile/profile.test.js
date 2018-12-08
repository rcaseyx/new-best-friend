import React from 'react';
import { shallow } from 'enzyme';

import Profile from './profile';

const preferences = {
  age: '',
  size: ''
}

describe('<Profile />', () => {
  it('Renders without crashing', () => {
    shallow(<Profile savedDogs={[]} preferences={preferences} />);
  });
});
