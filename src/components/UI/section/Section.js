import React from 'react';
import Loader from '../../UI/loader/Loader';
import PropTypes from 'prop-types';
import SectionHeading from '../../UI/section-heading/Section-heading';

const SectionComponent = (ComponentToWrap) => {
  return function ComponentToWrapWithLoading({...props}) {
    const { isLoading, isLoaded, icon, title } = props;
    if (!isLoading && isLoaded ) 
      return (
        <div>
          <SectionHeading icon={icon} title={title} />
          <ComponentToWrap {...props} />
        </div>
      );
    if (isLoading) 
      return (<Loader />);
    return null;  
  };
};

SectionComponent.propTypes = {
  ComponentToWrap: PropTypes.element,
};


export default SectionComponent;