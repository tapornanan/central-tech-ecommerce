import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Search from '../Search';

describe(`Search component`, () => {
  let wrapper: ReactWrapper;
  const handleFilterMock = jest.fn();

  beforeEach(() => {
    wrapper = mount(<Search handleFilter={handleFilterMock} />);
  });

  it(`should render`, () => {
    expect(wrapper.exists()).toBe(true);
  });

  it(`should render product search with empty input`, () => {
    const search = wrapper.find(`input[name="query"]`).get(0);
    const { value } = search.props;

    expect(value).toBe(``);
  });

  it(`should trigger handleFilter if input was change`, () => {
    wrapper
      .find(`input[name="query"]`)
      .simulate(`change`, { target: { value: `someValue` } });

    expect(handleFilterMock).toHaveBeenCalled();
    expect(handleFilterMock).toHaveBeenCalledWith({
      query: `someValue`,
      color: ``,
      size: ``,
    });
  });
});
