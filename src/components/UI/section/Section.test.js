import { shallow } from 'enzyme';
import React from 'react';
import SectionComponent from './Section';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('../loader/Loader', () => 'loader');
jest.mock('../section-heading/Section-heading', () => 'sectionheading');

describe('Section HOC test', () => {
  const mockComponent = () => {return (<p>test</p>);};  
  let LoaderComponent;

  beforeEach(() => {
    LoaderComponent = SectionComponent(mockComponent);
  });

  it('should return null when no isLoading and no isLoaded props',() => {
    const wrapper = shallow(
      <LoaderComponent />
    );
    expect(wrapper.html()).toBe(null);
  });

  it('should return Loader isLoading and no isLoaded props',() => {
    const wrapper = shallow(
      <LoaderComponent isLoading={true} isLoaded={false}/>
    );
    expect(wrapper.html()).toBe('<loader></loader>');
  });

  it('should return Loader isLoading and no isLoaded props',() => { 
    const wrapper = shallow(
      <LoaderComponent isLoading={false} isLoaded={true}/>
    );
    expect(wrapper.html()).toBe('<div><sectionheading></sectionheading><p>test</p></div>');
  });
});