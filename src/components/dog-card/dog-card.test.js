import React from 'react';
import {shallow} from 'enzyme';

import DogCard from './dog-card';

describe('<DogCard />', () => {
    it('Renders without crashing', () => {
        shallow(<DogCard />);
    });
});
