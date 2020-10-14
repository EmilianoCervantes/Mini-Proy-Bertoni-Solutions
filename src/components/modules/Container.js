import React from 'react';
import Header from './Header';

const Container = props => {
  return(
    <div className="container-fluid">
      <Header />
      {props.children}
    </div>
  );
};

export default Container;