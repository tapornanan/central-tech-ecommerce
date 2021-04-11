import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ProductCard from '../ProductCard';
import { IProduct } from '../../interfaces/product.interface';

const mockToast = jest.mock(`react-toast-notifications`, () => ({
  useToasts: jest.fn(() => ({
    addToast: jest.fn(),
  })),
}));

describe(`ProductCard Component`, () => {
  let wrapper: ShallowWrapper;
  const mockProduct: IProduct = {
    id: 1,
    color: `red`,
    createdAt: new Date(),
    department: `IT`,
    image: `some-image-url`,
    name: `Astrazeneca vaccine`,
    price: 899,
    size: 30,
  };

  beforeEach(() => {
    wrapper = shallow(<ProductCard product={mockProduct} />);
  });

  it(`should render`, () => {
    expect(wrapper.exists()).toBe(true);
  });

  it(`should render with product name 'Astrazeneca vaccine'`, () => {
    const productName = wrapper.find(`.product-name`).text();

    expect(productName).toEqual(mockProduct.name);
  });

  it(`should render inline style matched with color`, () => {
    const { style } = wrapper.find(`.product-color`).get(0).props;

    expect(style.backgroundColor).toEqual(mockProduct.color);
  });
});
