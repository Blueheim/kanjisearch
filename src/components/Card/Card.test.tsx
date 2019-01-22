import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('<Card />', () => {
  const props = {
    id: 1,
    character: '',
    meaning: [],
    kunyomi: [],
    onyomi: [],
  };

  const wrapper = shallow(<Card {...props} />);

  it('expect to render Card component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
