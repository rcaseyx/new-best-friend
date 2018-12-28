import React from 'react';
import {shallow} from 'enzyme';

import FriendSearch from './friend-search';

describe('<FriendSearch />', () => {
    it('Renders without crashing', () => {
        shallow(<FriendSearch />);
    });
});
