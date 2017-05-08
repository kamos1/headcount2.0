import React from 'react';
import { shallow, mount} from 'enzyme';
import CardContainer from '../../src/components/CardContainer';
import DistrictRepository from '../../src/helper';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('CardContainer Test', () => {
  it('has a cardContainer class ', () => {
    const district = new DistrictRepository(kinderData);
    const data = district.data;
    const wrapper = shallow(<CardContainer handleData={{data}} handleCompare={() => {}} handleCompareData={[]}/>)

    expect(wrapper.find('.cardsContainer').length).toEqual(1);
  })

  it('renders 181 elements with class name card ', () => {
    const district = new DistrictRepository(kinderData);
    const data = district.data;
    const wrapper = shallow(<CardContainer handleData={{data}} handleCompare={() => {}} handleCompareData={[]}/>)
    const cardsContainer = wrapper.find('.cardsContainer').props();
    console.log(cardsContainer);
    expect(wrapper.find('.cardsContainer').props().length).toEqual(2);
  })
})
