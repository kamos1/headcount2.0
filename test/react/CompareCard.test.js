import React from 'react';
import { shallow, mount } from 'enzyme';
import CompareCard from '../../src/components/CompareCard';
import DistrictRepository from '../../src/helper';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('Compare Card', () => {
  it('has a compareCard class', () => {
    const obj = {boulder: .12, denver: 12, compared: 1}
    const wrapper = shallow(<CompareCard {...obj}/>);
    expect(wrapper.find('.compareCard').length).toEqual(1);
  })

  it('has a location and has data', () => {
    const obj = {boulder: .12, denver: 12, compared: 1}
    const wrapper = shallow(<CompareCard {...obj}/>);
    expect(wrapper.find('p').length).toEqual(3);


  })
})
