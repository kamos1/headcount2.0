import React from 'react';
import { shallow, mount} from 'enzyme';
import Controls from '../../src/components/Controls';

describe('Controls Test', () => {
  it('should update location on onChange ', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Controls handleSubmit={mock} handleSearch={mock}/>);
    const input = wrapper.find('input[type="text"]');

    input.simulate('change', {target: {value: 'Colorado'}});
    expect(wrapper.state('location')).toEqual('Colorado');
  })

  it('runs autoComplete', () => {
    const mockSubmit = jest.fn();
    const mockComplete = jest.fn();
    const wrapper = mount(<Controls handleSubmit={ mockSubmit } handleSearch={ mockComplete }/>);

    const input = wrapper.find('.input');
    input.simulate('change', { target: { value: 'Colorado'}});


    expect(mockComplete).toHaveBeenCalledTimes(1);
  })

})
