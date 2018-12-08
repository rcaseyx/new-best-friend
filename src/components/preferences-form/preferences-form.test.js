import React from 'react';
import { shallow } from 'enzyme';

import PreferencesForm from './preferences-form';

describe('<PreferencesForm />', () => {
  it('Renders without crashing', () => {
    shallow(<PreferencesForm />);
  });
});
