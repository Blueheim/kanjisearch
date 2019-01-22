import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

describe('<CardList />', () => {
  const kanjis = [
    {
      id: 1,
      character: 'X',
      meaning: ['blabla'],
      kunyomi: ['ytyt', 'fgfdgd'],
      onyomi: ['ffdf', 'fsdf'],
    },
  ];

  const wrapper = shallow(<CardList kanjis={kanjis} />);

  it('expect to render CardList component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
